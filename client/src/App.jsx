import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home/Home'
import Watch from './pages/Watch/Watch'
import Search from './pages/Search/Search'
import Channel from './pages/Channel/Channel'
import Upload from './pages/Upload/Upload'
import Profile from './pages/Profile/Profile'
import NotFound from './pages/NotFound/NotFound'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Channels from './pages/Channels/Channels'
import History from './pages/History/History'
import Liked from './pages/Liked/Liked'
import Explore from './pages/Explore/Explore'

function App() {
  return <BrowserRouter><Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route element={<MainLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/watch/:id" element={<Watch />} />
      <Route path="/search" element={<Search />} />
      <Route path="/channel/:id" element={<Channel />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/channels" element={<Channels />} />
      <Route path="/history" element={<History />} />
      <Route path="/liked" element={<Liked />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes></BrowserRouter>
}

export default App
