import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FiBell, FiMoreHorizontal, FiShare2, FiThumbsUp } from 'react-icons/fi'
import { videos } from '../../data/videos'
import VideoCard from '../../components/VideoCard/VideoCard'
import Avatar from '../../components/Avatar'

function Watch() {
  const { id } = useParams()
  const video = videos.find((item) => item.id === id) || videos[0]
  const [liked, setLiked] = useState(() => localStorage.getItem(`like-${video.id}`) === 'true')
  const [subscribed, setSubscribed] = useState(() => localStorage.getItem(`sub-${video.channelId}`) === 'true')
  const [showDescription, setShowDescription] = useState(false)
  useEffect(() => { localStorage.setItem(`history-${video.id}`, 'true') }, [video.id])
  const toggleLike = () => { const value = !liked; setLiked(value); localStorage.setItem(`like-${video.id}`, value) }
  const toggleSubscribe = () => { const value = !subscribed; setSubscribed(value); localStorage.setItem(`sub-${video.channelId}`, value) }
  return <div className="mx-auto max-w-[1800px] p-4 lg:p-6"><div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_380px]"><section className="min-w-0"><div className="aspect-video overflow-hidden rounded-xl bg-black"><iframe className="h-full w-full" src={`https://www.youtube-nocookie.com/embed/${video.embed}?autoplay=0&rel=0`} title={video.title} allowFullScreen /></div>
    <h1 className="mt-3 text-lg font-bold sm:text-xl">{video.title}</h1><div className="mt-3 flex flex-wrap items-center justify-between gap-3"><Link to={`/channel/${video.channelId}`} className="flex items-center gap-3"><Avatar name={video.channel} size="lg" /><div><p className="font-semibold">{video.channel}</p><p className="text-xs text-zinc-400">1.2M subscribers</p></div></Link><button onClick={toggleSubscribe} className={`rounded-full px-4 py-2.5 text-sm font-semibold ${subscribed ? 'bg-zinc-800' : 'bg-white text-black'}`}>{subscribed ? 'Subscribed' : 'Subscribe'} {subscribed && <FiBell className="ml-1 inline" />}</button><div className="flex gap-2"><button onClick={toggleLike} className="rounded-full bg-zinc-800 px-4 py-2.5 text-sm"><FiThumbsUp className="mr-2 inline" />{liked ? 'Liked' : 'Like'}</button><button className="rounded-full bg-zinc-800 px-4 py-2.5 text-sm"><FiShare2 className="mr-2 inline" />Share</button><button className="rounded-full bg-zinc-800 p-2.5"><FiMoreHorizontal /></button></div></div>
    <button onClick={() => setShowDescription(!showDescription)} className="mt-4 w-full rounded-xl bg-zinc-900 p-3 text-left text-sm hover:bg-zinc-800"><b>{video.views} views • {video.age}</b><p className={`mt-2 whitespace-pre-line text-zinc-300 ${showDescription ? '' : 'line-clamp-2'}`}>{video.description}\n\nThanks for watching. Subscribe for more videos every week.</p></button>
    <div className="mt-6"><h2 className="mb-4 text-xl font-bold">12 Comments</h2><div className="flex gap-3"><Avatar name="Nilan" /><input className="w-full border-b border-zinc-700 bg-transparent pb-2 text-sm outline-none focus:border-white" placeholder="Add a comment..." /></div></div></section>
    <aside><h2 className="mb-4 text-lg font-bold">Up next</h2><div className="space-y-3">{videos.filter((item) => item.id !== video.id).map((item) => <VideoCard key={item.id} video={item} compact />)}</div></aside></div></div>
}
export default Watch
