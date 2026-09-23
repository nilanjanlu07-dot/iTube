import VideoCard from "../../components/VideoCard/VideoCard";
import { categories, videos } from '../../data/videos'
import { useState } from 'react'

function Home() {
  const [category, setCategory] = useState('All')
  const filtered = category === 'All' ? videos : videos.filter((v) => `${v.title} ${v.channel}`.toLowerCase().includes(category.toLowerCase()))
  return (
    <div className="px-4 py-5 sm:px-6"><div className="mb-6 flex gap-3 overflow-x-auto pb-1">{categories.map((item) => <button onClick={() => setCategory(item)} key={item} className={`whitespace-nowrap rounded-lg px-3 py-1.5 text-sm font-medium ${category === item ? 'bg-white text-black' : 'bg-zinc-800 hover:bg-zinc-700'}`}>{item}</button>)}</div>
      <div className="grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 xl:grid-cols-3">{(filtered.length ? filtered : videos).map((video) => <VideoCard video={video} key={video.id} />)}</div>
    </div>
  );
}

export default Home;
