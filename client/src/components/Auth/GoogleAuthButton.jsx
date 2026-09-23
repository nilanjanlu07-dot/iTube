import { useEffect, useRef, useState } from 'react'

let scriptPromise
let initializedClientId
let credentialHandler = () => {}

function loadGoogleScript() {
  if (window.google?.accounts?.id) return Promise.resolve()
  if (scriptPromise) return scriptPromise
  scriptPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = 'https://accounts.google.com/gsi/client'
    script.async = true
    script.defer = true
    script.onload = resolve
    script.onerror = () => reject(new Error('Google Identity Services could not be loaded.'))
    document.head.appendChild(script)
  })
  return scriptPromise
}

function decodeCredential(token) {
  const payload = token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/')
  const json = decodeURIComponent(atob(payload).split('').map((char) => `%${`00${char.charCodeAt(0).toString(16)}`.slice(-2)}`).join(''))
  return JSON.parse(json)
}

function GoogleAuthButton({ text, onSuccess, onError }) {
  const container = useRef(null)
  const callback = useRef(onSuccess)
  const [error, setError] = useState('')
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID
  useEffect(() => { callback.current = onSuccess }, [onSuccess])
  useEffect(() => {
    if (!clientId) { setError('Google sign-in needs VITE_GOOGLE_CLIENT_ID in your .env file.'); return }
    let cancelled = false
    credentialHandler = (response) => {
      try {
        const profile = decodeCredential(response.credential)
        Promise.resolve(callback.current({ profile, credential: response.credential })).catch((authError) => {
          const message = authError.message || 'Google sign-in could not be completed.'
          setError(message)
          onError?.(message)
        })
      } catch {
        const message = 'Google returned an invalid sign-in credential.'
        setError(message)
        onError?.(message)
      }
    }
    loadGoogleScript().then(() => {
      if (cancelled) return
      if (initializedClientId !== clientId) {
        window.google.accounts.id.initialize({ client_id: clientId, callback: (response) => credentialHandler(response), auto_select: false })
        initializedClientId = clientId
      }
      container.current.innerHTML = ''
      window.google.accounts.id.renderButton(container.current, { type: 'standard', theme: 'outline', size: 'large', text, shape: 'pill', width: 320, logo_alignment: 'left' })
    }).catch((loadError) => setError(loadError.message))
    return () => { cancelled = true }
  }, [clientId, text])
  return <div className="mt-4"><div ref={container} className="flex justify-center" />{error && <p className="mt-2 text-center text-xs text-amber-300">{error}</p>}</div>
}

export default GoogleAuthButton
