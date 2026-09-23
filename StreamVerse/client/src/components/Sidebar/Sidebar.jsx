import { NavLink } from 'react-router-dom'
import { MdHome, MdOutlineHome, MdOutlineExplore, MdOutlineSubscriptions, MdOutlineHistory, MdOutlineThumbUp, MdOutlineVideoLibrary, MdSubscriptions, MdExplore, MdHistory, MdThumbUp, MdVideoLibrary, MdOutlineAccountCircle } from 'react-icons/md'
const items = [
  [MdHome, MdOutlineHome, 'Home', '/'],
  [MdExplore, MdOutlineExplore, 'Explore', '/explore'],
  [MdSubscriptions, MdOutlineSubscriptions, 'Subscriptions', '/channels'],
  [MdVideoLibrary, MdOutlineVideoLibrary, 'Library', '/profile'],
  [MdHistory, MdOutlineHistory, 'History', '/history'],
  [MdThumbUp, MdOutlineThumbUp, 'Liked videos', '/liked'],
]
function Sidebar({ collapsed = false }) {
  return (
    <aside className={`sticky top-16 hidden h-[calc(100vh-4rem)] shrink-0 border-r border-zinc-800 bg-zinc-950 p-3 transition-[width] duration-200 md:block ${collapsed ? 'w-20' : 'w-60'}`}>
      <ul className="space-y-1">
        {items.map(([ActiveIcon, Icon, label, to]) => <li key={label}><NavLink title={collapsed ? label : undefined} end={to === '/'} to={to} className={({isActive}) => `flex items-center rounded-xl px-3 py-3 text-sm ${collapsed ? 'justify-center' : 'gap-5'} ${isActive ? 'bg-zinc-800 font-semibold' : 'hover:bg-zinc-900'}`}>{({ isActive }) => <>{isActive ? <ActiveIcon className="shrink-0 text-[22px]" /> : <Icon className="shrink-0 text-[22px]" />}{!collapsed && <span className="whitespace-nowrap">{label}</span>}</>}</NavLink></li>)}
      </ul>
      {!collapsed && <><div className="my-3 border-t border-zinc-800" /><p className="px-3 text-xs font-semibold text-zinc-400">YOU</p></>}
      <NavLink title={collapsed ? 'Channels' : undefined} to="/channels" className={`mt-2 flex items-center rounded-xl px-3 py-3 text-sm hover:bg-zinc-900 ${collapsed ? 'justify-center' : 'gap-5'}`}><MdOutlineAccountCircle className="shrink-0 text-[22px]" />{!collapsed && <span>Channels</span>}</NavLink>
    </aside>
  );
}

export default Sidebar;
