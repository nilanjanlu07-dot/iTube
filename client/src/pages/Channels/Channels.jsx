import { useState } from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../../components/Avatar'
import { videos } from '../../data/videos'

function Channels() {
  const channels = [...new Map(videos.map((video) => [video.channelId, video])).values()]
  const [version, setVersion] = useState(0)
  const subscribed = channels.filter((channel) => localStorage.getItem(`sub-${channel.channelId}`) === 'true')
  const toggle = (channel) => { const key = `sub-${channel.channelId}`; localStorage.setItem(key, String(localStorage.getItem(key) !== 'true')); setVersion(version + 1) }
  return <div className="mx-auto max-w-6xl p-5 sm:p-8"><h1 className="text-2xl font-bold">Channels</h1><p className="mt-1 text-sm text-zinc-400">Channels you subscribe to appear here.</p>{subscribed.length ? <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{subscribed.map((channel) => <div key={channel.channelId} className="flex items-center gap-3 rounded-xl bg-zinc-900 p-4"><Link to={`/channel/${channel.channelId}`}><Avatar name={channel.channel} size="lg" /></Link><Link className="min-w-0 flex-1" to={`/channel/${channel.channelId}`}><p className="truncate font-semibold">{channel.channel}</p><p className="text-xs text-zinc-400">1.2M subscribers</p></Link><button onClick={() => toggle(channel)} className="rounded-full bg-zinc-800 px-3 py-2 text-xs font-semibold hover:bg-zinc-700">Subscribed</button></div>)}</div> : <div className="mt-8 rounded-2xl bg-zinc-900 p-8 text-center"><h2 className="font-semibold">No subscriptions yet</h2><p className="mt-2 text-sm text-zinc-400">Subscribe to channels and they will show up here.</p><Link to="/" className="mt-5 inline-block rounded-full bg-white px-4 py-2 text-sm font-semibold text-black">Explore videos</Link></div>}<h2 className="mt-10 text-lg font-bold">Recommended channels</h2><div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{channels.filter((channel) => !subscribed.some((item) => item.channelId === channel.channelId)).map((channel) => <div key={channel.channelId} className="flex items-center gap-3 rounded-xl border border-zinc-800 p-4"><Avatar name={channel.channel} size="lg" /><div className="min-w-0 flex-1"><p className="truncate font-semibold">{channel.channel}</p><p className="text-xs text-zinc-400">Popular creator</p></div><button onClick={() => toggle(channel)} className="rounded-full bg-white px-3 py-2 text-xs font-bold text-black">Subscribe</button></div>)}</div></div>
}
export default Channels
