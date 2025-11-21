import Layout from '../../components/Layout'

export default function Signup() {
  return (
    <Layout>
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-semibold text-white mb-6">Create your account</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-sm text-blue-200 mb-1">Email</label>
            <input type="email" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="you@company.com" />
          </div>
          <div>
            <label className="block text-sm text-blue-200 mb-1">Password</label>
            <input type="password" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="Strong password" />
          </div>
          <div>
            <label className="block text-sm text-blue-200 mb-1">Full name</label>
            <input type="text" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="Your name" />
          </div>
          <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg py-3">Create account</button>
        </form>
        <p className="text-sm text-blue-200/80 mt-4">Already have an account? <a className="text-blue-300 hover:text-white" href="/login">Sign in</a></p>
      </div>
    </Layout>
  )
}
