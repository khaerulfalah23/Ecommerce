import './assets/css/app.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import Details from './pages/Details'
import Cart from './pages/Cart'
import Congratulations from './pages/Congratulations'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={HomePage} />
        <Route path='/categories/:idc' Component={Details} />
        <Route path='/cart' Component={Cart} />
        <Route path='/congratulations' Component={Congratulations} />
        <Route path='*' Component={NotFound} />
      </Routes>
    </Router>
  )
}

export default App
