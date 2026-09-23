import { useSearchParams } from 'react-router-dom'
import VideoCard from '../../components/VideoCard/VideoCard'
import { videos } from '../../data/videos'
function Search() { const [params] = useSearchParams(); const query = params.get('q') || ''; const results = videos.filter((v) => `${v.title} ${v.channel} ${v.description}`.toLowerCase().includes(query.toLowerCase())); return <div className="mx-auto max-w-5xl p-4 sm:p-6"><h1 className="mb-6 text-xl font-bold">{query ? `Search results for “${query}”` : 'Trending videos'}</h1><div className="space-y-5">{(results.length ? results : videos).map((video) => <VideoCard key={video.id} video={video} compact />)}</div></div> }
export default Search
