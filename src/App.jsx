import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import HomeLayout from './pages/HomeLayout'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import TrendingReels from './pages/reels/Trending'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<HomeLayout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/reels/trending" element={<TrendingReels />} />
    </Routes>
  )
}

export default App
