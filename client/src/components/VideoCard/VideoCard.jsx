import { Link } from 'react-router-dom'
import Avatar from '../Avatar'
function VideoCard({ video, compact = false }) {
  return (
    <Link to={`/watch/${video.id}`} className={`group block ${compact ? 'flex gap-2' : ''}`}>
      <div className={`relative overflow-hidden rounded-xl bg-zinc-800 ${compact ? 'w-44 shrink-0' : 'aspect-video'}`}>
        <img src={video.image} alt="" className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
        <span className="absolute bottom-1 right-1 rounded bg-black/85 px-1.5 py-0.5 text-xs font-medium">{video.duration}</span>
      </div>
      <div className={`flex gap-3 ${compact ? 'pt-0' : 'pt-3'}`}>
        {!compact && <Avatar name={video.channel} />}
        <div className="min-w-0"><h2 className="line-clamp-2 text-sm font-semibold leading-5">{video.title}</h2><p className="mt-1 text-xs text-zinc-400">{video.channel}</p><p className="text-xs text-zinc-400">{video.views} views • {video.age}</p></div>
      </div>
    </Link>
  );
}

export default VideoCard;
