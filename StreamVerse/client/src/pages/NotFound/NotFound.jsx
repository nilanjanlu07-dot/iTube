import { Link } from 'react-router-dom'
function NotFound() { return <div className="grid min-h-[70vh] place-items-center p-6 text-center"><div><p className="text-7xl font-black text-zinc-700">404</p><h1 className="mt-3 text-xl font-bold">This page isn't available.</h1><Link className="mt-6 inline-block rounded-full bg-white px-5 py-2.5 font-semibold text-black" to="/">Go to Home</Link></div></div> }
export default NotFound
