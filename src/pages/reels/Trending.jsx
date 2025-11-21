import Layout from '../../components/Layout'

export default function TrendingReels(){
  return (
    <div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-2xl font-semibold text-white mb-6">Trending Reels</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(9)].map((_,i)=> (
            <div key={i} className="rounded-2xl overflow-hidden border border-slate-700/60 bg-slate-800/40">
              <div className="aspect-video bg-slate-900" />
              <div className="p-4">
                <div className="h-4 bg-slate-700/50 rounded w-3/4 mb-2" />
                <div className="h-3 bg-slate-700/40 rounded w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
