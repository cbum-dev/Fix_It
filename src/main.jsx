import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Hero from './Hero.jsx'
import Navbar from './Components/Navbar.jsx'
// import Footer from './Components/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Route exact path="/" element={<App/>} />
      <Route path="/hero" element={<Hero/>} />
      {/* <Footer /> */}
    </Router>
  </React.StrictMode>,
)
