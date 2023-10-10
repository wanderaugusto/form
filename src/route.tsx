import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/home'
import Acard from './pages/acard/acard'
import Aform from './pages/aform/aform'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card" element={<Acard />} />
        <Route path="/form" element={<Aform />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
