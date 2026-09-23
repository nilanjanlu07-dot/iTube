import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FiAlertCircle, FiBell, FiClock, FiMenu, FiMic, FiPlus, FiSearch, FiTrendingUp, FiX } from 'react-icons/fi'
import { videos } from '../../data/videos'

const historyKey = 'itube-search-history'

function readHistory() {
  try { return JSON.parse(localStorage.getItem(historyKey) || '[]') } catch { return [] }
}

function Navbar({ onMenuToggle }) {
  const navigate = useNavigate()
  const location = useLocation()
  const [query, setQuery] = useState('')
  const [focused, setFocused] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)
  const [recent, setRecent] = useState(readHistory)
  const [listening, setListening] = useState(false)
  const [voiceError, setVoiceError] = useState('')
  const searchRef = useRef(null)
  const recognitionRef = useRef(null)
  const routeQuery = new URLSearchParams(location.search).get('q') || ''
  useEffect(() => { if (location.pathname === '/search') setQuery(routeQuery) }, [location.pathname, routeQuery])
  useEffect(() => {
    const closeSuggestions = (event) => { if (!searchRef.current?.contains(event.target)) setFocused(false) }
    document.addEventListener('mousedown', closeSuggestions)
    return () => document.removeEventListener('mousedown', closeSuggestions)
  }, [])
  useEffect(() => () => recognitionRef.current?.abort(), [])

  const suggestions = useMemo(() => {
    const term = query.trim().toLowerCase()
    if (!term) return recent.map((text) => ({ text, type: 'recent' }))
    const matches = videos.filter((video) => `${video.title} ${video.channel} ${video.description}`.toLowerCase().includes(term)).slice(0, 6)
    return matches.map((video) => ({ text: video.title, type: 'video', video }))
  }, [query, recent])

  const search = (value = query) => {
    const clean = value.trim()
    if (!clean) return
    const next = [clean, ...recent.filter((item) => item.toLowerCase() !== clean.toLowerCase())].slice(0, 8)
    localStorage.setItem(historyKey, JSON.stringify(next)); setRecent(next); setFocused(false); setActiveIndex(-1)
    navigate(`/search?q=${encodeURIComponent(clean)}`)
  }
  const onKeyDown = (event) => {
    if (event.key === 'ArrowDown') { event.preventDefault(); setActiveIndex((current) => Math.min(current + 1, suggestions.length - 1)) }
    else if (event.key === 'ArrowUp') { event.preventDefault(); setActiveIndex((current) => Math.max(current - 1, -1)) }
    else if (event.key === 'Escape') { setFocused(false); event.currentTarget.blur() }
    else if (event.key === 'Enter' && activeIndex >= 0) { event.preventDefault(); search(suggestions[activeIndex].text) }
  }
  const startVoiceSearch = () => {
    setVoiceError('')
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    if (!SpeechRecognition) { setVoiceError('Voice search is not supported in this browser. Try Chrome or Edge.'); return }
    if (listening) { recognitionRef.current?.stop(); return }
    const recognition = new SpeechRecognition()
    recognition.lang = navigator.language || 'en-US'
    recognition.interimResults = true
    recognition.continuous = false
    recognition.onstart = () => setListening(true)
    recognition.onresult = (event) => {
      const transcript = Array.from(event.results).map((result) => result[0].transcript).join('')
      setQuery(transcript)
      if (event.results[event.results.length - 1].isFinal) search(transcript)
    }
    recognition.onerror = (event) => { if (event.error !== 'aborted') setVoiceError(event.error === 'not-allowed' ? 'Microphone access was blocked. Allow it in your browser settings.' : 'Voice search could not hear that. Please try again.') }
    recognition.onend = () => setListening(false)
    recognitionRef.current = recognition
    recognition.start()
  }
  const user = JSON.parse(localStorage.getItem('itube-user') || '{"name":"N"}')
  return <nav className="sticky top-0 z-30 flex h-14 items-center gap-3 border-b border-zinc-800 bg-zinc-950/95 px-3 backdrop-blur sm:h-16 sm:px-5">
    <button onClick={onMenuToggle} aria-label="Toggle navigation" title="Toggle navigation" className="hidden rounded-full p-2 hover:bg-zinc-800 md:block"><FiMenu className="text-xl text-zinc-300" /></button>
    <Link to="/" className="text-xl font-black tracking-tight text-white whitespace-nowrap"><span className="mr-1 inline-block rounded bg-red-600 px-1.5 py-0.5 text-sm">▶</span>iTube<sup className="ml-1 text-[8px] font-medium text-zinc-400">IN</sup></Link>
    <div ref={searchRef} className="relative mx-auto w-full max-w-2xl"><form onSubmit={(event) => { event.preventDefault(); search() }} className="flex items-center"><input value={query} onFocus={() => setFocused(true)} onKeyDown={onKeyDown} onChange={(event) => { setQuery(event.target.value); setActiveIndex(-1) }} type="search" placeholder="Search" aria-label="Search videos" aria-expanded={focused} aria-controls="search-suggestions" className="min-w-0 flex-1 rounded-l-full border border-zinc-700 bg-zinc-900 px-4 py-2.5 outline-none focus:border-blue-500" />{query && <button onClick={() => { setQuery(''); setFocused(true) }} type="button" aria-label="Clear search" className="-ml-9 z-10 rounded-full p-1 text-zinc-400 hover:bg-zinc-700 hover:text-white"><FiX /></button>}<button aria-label="Search" className="rounded-r-full border border-l-0 border-zinc-700 bg-zinc-800 px-5 py-3 text-zinc-200 hover:bg-zinc-700"><FiSearch /></button></form>
      {focused && <div id="search-suggestions" className="absolute left-0 right-0 top-12 z-50 overflow-hidden rounded-xl border border-zinc-700 bg-zinc-900 py-2 shadow-2xl">{suggestions.length ? <>{!query && <div className="flex items-center justify-between px-4 pb-1 pt-1"><span className="text-xs font-semibold text-zinc-400">RECENT SEARCHES</span><button onMouseDown={(event) => event.preventDefault()} onClick={() => { localStorage.removeItem(historyKey); setRecent([]) }} className="text-xs text-blue-400 hover:text-blue-300">Clear</button></div>}{suggestions.map((suggestion, index) => <button onMouseDown={(event) => event.preventDefault()} onClick={() => search(suggestion.text)} key={`${suggestion.type}-${suggestion.text}`} className={`flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm ${index === activeIndex ? 'bg-zinc-800' : 'hover:bg-zinc-800'}`}>{suggestion.type === 'recent' ? <FiClock className="shrink-0 text-zinc-400" /> : <FiSearch className="shrink-0 text-zinc-400" />}<span className="truncate">{suggestion.text}</span></button>)}</> : <div className="flex items-center gap-3 px-4 py-3 text-sm text-zinc-400"><FiTrendingUp />Try a broader search</div>}</div>}{voiceError && <div className="absolute top-13 z-50 mt-1 flex w-full items-center gap-2 rounded-lg border border-red-900 bg-zinc-900 p-2 text-xs text-red-300"><FiAlertCircle />{voiceError}<button onClick={() => setVoiceError('')} className="ml-auto"><FiX /></button></div>}</div>
    <button onClick={startVoiceSearch} title={listening ? 'Stop voice search' : 'Search with your voice'} aria-label={listening ? 'Stop voice search' : 'Search with your voice'} className={`hidden rounded-full p-3 lg:block ${listening ? 'bg-red-600 animate-pulse' : 'bg-zinc-900 hover:bg-zinc-800'}`}><FiMic /></button><Link to="/upload" title="Create" className="hidden items-center gap-1 rounded-full px-3 py-2 hover:bg-zinc-800 sm:flex"><FiPlus className="text-xl" /><span className="text-sm font-medium">Create</span></Link><button aria-label="Notifications" className="relative hidden rounded-full p-2 hover:bg-zinc-800 sm:block"><FiBell className="text-xl" /><span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-600" /></button><Link to={localStorage.getItem('itube-user') ? '/profile' : '/login'} title="Your account" className="grid h-8 w-8 place-items-center rounded-full bg-violet-600 text-sm font-bold">{user.name[0].toUpperCase()}</Link>
  </nav>
}
export default Navbar
