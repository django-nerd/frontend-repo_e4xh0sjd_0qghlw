import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-6xl px-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-slate-900/40 px-3 py-1 text-xs text-blue-200">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" /> Secure, scalable, real-time
          </div>
          <h1 className="mt-4 text-4xl sm:text-6xl font-bold tracking-tight text-white drop-shadow">Aptly: Your professional identity, reimagined</h1>
          <p className="mt-4 max-w-2xl text-blue-200/90">Showcase your skills with video resumes and professional reels. Build meaningful connections, collaborate, and grow your career — with enterprise-grade security built-in.</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link to="/signup" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium shadow-lg shadow-blue-900/30 transition">
              Get started <ArrowRight size={18} />
            </Link>
            <Link to="/reels/trending" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800/70 hover:bg-slate-700 text-slate-100 font-medium border border-slate-700/60">
              Explore trending reels
            </Link>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/10 to-slate-900" />
    </section>
  )
}
