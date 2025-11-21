export default function Footer() {
  return (
    <footer className="border-t border-slate-700/50 py-10 bg-slate-900/60">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-blue-200/70">© {new Date().getFullYear()} Aptly. All rights reserved.</p>
        <nav className="flex items-center gap-4 text-sm">
          <a href="#" className="text-blue-200/80 hover:text-white">Security</a>
          <a href="#" className="text-blue-200/80 hover:text-white">Privacy</a>
          <a href="#" className="text-blue-200/80 hover:text-white">Status</a>
          <a href="#" className="text-blue-200/80 hover:text-white">Docs</a>
        </nav>
      </div>
    </footer>
  )
}
