export default function Avatar({ name, size = 'md' }) {
  const initials = name.split(' ').map((part) => part[0]).slice(0, 2).join('')
  const sizes = { sm: 'h-8 w-8 text-xs', md: 'h-10 w-10 text-sm', lg: 'h-12 w-12 text-base' }
  return <div className={`${sizes[size]} shrink-0 rounded-full bg-gradient-to-br from-rose-500 to-violet-600 grid place-items-center font-bold text-white`}>{initials}</div>
}
