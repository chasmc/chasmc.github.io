import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import Resume from './pages/Resume'
import NotFound from './pages/NotFound'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Layout />}>
          <Route path="about" element={<About />} />
          <Route path="work" element={<Work />} />
          <Route path="resume" element={<Resume />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
