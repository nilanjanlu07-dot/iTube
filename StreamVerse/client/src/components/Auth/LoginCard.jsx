import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import GoogleAuthButton from './GoogleAuthButton'

function LoginCard() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const submit = (event) => {
    event.preventDefault()
    const account = JSON.parse(localStorage.getItem('itube-account') || 'null')
    if (!email || !password) return setError('Enter your email and password.')
    if (account && (account.email !== email || account.password !== password)) return setError('That email or password does not match this demo account.')
    const name = account?.name || email.split('@')[0]
    localStorage.setItem('itube-user', JSON.stringify({ name, email }))
    navigate('/')
  }
  const googleSuccess = async ({ credential }) => { const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/auth/google`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ credential }) }); const data = await response.json(); if (!response.ok) throw new Error(data.message || 'Google sign-in could not be completed.'); localStorage.setItem('itube-user', JSON.stringify(data.user)); localStorage.setItem('itube-token', data.token); navigate('/') }
  return <div className="w-full max-w-md rounded-3xl border border-white/10 bg-zinc-900 p-8 shadow-2xl"><Link to="/" className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-red-600 text-2xl">▶</Link><h1 className="mt-6 text-center text-3xl font-bold">Welcome back</h1><p className="mt-2 text-center text-zinc-400">Sign in to your iTube account</p><form onSubmit={submit} className="mt-8 space-y-4"><input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required placeholder="Email address" className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 outline-none focus:border-red-500" /><input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required placeholder="Password" className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 outline-none focus:border-red-500" />{error && <p className="text-sm text-red-400">{error}</p>}<button className="w-full rounded-xl bg-red-600 py-3 font-semibold hover:bg-red-700">Login</button></form><div className="my-5 flex items-center gap-3 text-xs text-zinc-500"><span className="h-px flex-1 bg-zinc-700" />OR<span className="h-px flex-1 bg-zinc-700" /></div><GoogleAuthButton text="signin_with" onSuccess={googleSuccess} onError={setError} /><p className="mt-6 text-center text-sm text-zinc-400">New to iTube? <Link className="font-semibold text-red-400" to="/signup">Create account</Link></p></div>
}
export default LoginCard
