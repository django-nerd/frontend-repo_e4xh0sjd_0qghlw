import { Link, NavLink } from 'react-router-dom'
import { Menu, Bell, User, Search } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-slate-700/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-lg hover:bg-slate-800 text-blue-300">
            <Menu size={20} />
          </button>
          <Link to="/" className="flex items-center gap-2">
            <img src="/flame-icon.svg" alt="Aptly" className="h-8 w-8" />
            <span className="text-white font-semibold tracking-tight">Aptly</span>
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-2 flex-1 max-w-xl mx-6">
          <div className="relative w-full">
            <input className="w-full bg-slate-800/60 border border-slate-700/60 rounded-xl py-2.5 pl-10 pr-4 text-sm text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/50" placeholder="Search professionals, skills, reels..." />
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          </div>
        </div>
        <nav className="flex items-center gap-2">
          <NavLink to="/reels" className="text-slate-200 text-sm px-3 py-2 rounded-lg hover:bg-slate-800">Reels</NavLink>
          <NavLink to="/feed" className="text-slate-200 text-sm px-3 py-2 rounded-lg hover:bg-slate-800">Feed</NavLink>
          <NavLink to="/connections" className="text-slate-200 text-sm px-3 py-2 rounded-lg hover:bg-slate-800">Network</NavLink>
          <button className="p-2 rounded-lg hover:bg-slate-800 text-blue-300 relative">
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full" />
          </button>
          <NavLink to="/account" className="p-2 rounded-lg hover:bg-slate-800 text-blue-300">
            <User size={20} />
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
