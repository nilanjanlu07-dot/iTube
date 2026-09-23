import { Link } from 'react-router-dom'
import { MdLocalFireDepartment, MdMusicNote, MdSportsEsports, MdPodcasts, MdMovie, MdLightbulb } from 'react-icons/md'
import VideoCard from '../../components/VideoCard/VideoCard'
import { categories, videos } from '../../data/videos'

const topics = [
  [MdLocalFireDepartment, 'Trending', 'What viewers are watching now', ''],
  [MdMusicNote, 'Music', 'Live sets and fresh releases', 'music'],
  [MdMovie, 'Movies', 'Trailers, scenes and short films', 'film'],
  [MdSportsEsports, 'Gaming', 'Highlights and walkthroughs', 'gaming'],
  [MdLightbulb, 'Learning', 'Ideas, skills and tutorials', 'design'],
  [MdPodcasts, 'Podcasts', 'Conversations worth hearing', 'podcast'],
]

function Explore() {
  return <div className="mx-auto max-w-7xl p-5 sm:p-8"><h1 className="text-2xl font-bold">Explore</h1><p className="mt-1 text-sm text-zinc-400">Discover what is happening across iTube.</p><div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{topics.map(([Icon, name, description, query]) => <Link key={name} to={`/search?q=${encodeURIComponent(query)}`} className="group rounded-xl border border-zinc-800 bg-zinc-900 p-5 transition hover:border-zinc-600 hover:bg-zinc-800"><Icon className="text-3xl text-red-500" /><h2 className="mt-4 font-bold">{name}</h2><p className="mt-1 text-sm text-zinc-400">{description}</p></Link>)}</div><div className="mt-10 flex gap-2 overflow-x-auto pb-1">{categories.slice(1).map((category) => <Link key={category} to={`/search?q=${category.toLowerCase()}`} className="whitespace-nowrap rounded-lg bg-zinc-800 px-3 py-2 text-sm hover:bg-zinc-700">#{category}</Link>)}</div><h2 className="mt-8 text-xl font-bold">Trending videos</h2><div className="mt-4 grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 xl:grid-cols-3">{videos.slice(0, 6).map((video) => <VideoCard video={video} key={video.id} />)}</div></div>
}
export default Explore
