import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import Benefits from './components/Benefits'
import Services from './components/Services'
import Footer from './components/Footer'
import Navbar from './components/NavBar'
import Videos from './components/Videos'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    
    <Header />
    <div className="main-content">
      <Benefits />
      <Services />
      <Videos />
    </div>
    <Footer />
  </StrictMode>,
)
