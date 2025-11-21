import Layout from '../components/Layout'
import Hero from '../components/Hero'
import FeatureGrid from '../components/FeatureGrid'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Hero />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FeatureGrid />
      </div>
      <Footer />
    </div>
  )
}
