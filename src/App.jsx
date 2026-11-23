import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Pricing from './pages/Pricing'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Properties from './pages/Properties'
import Inspections from './pages/Inspections'
import Documents from './pages/Documents'
import Settings from './pages/Settings'
import Footer from './components/Footer'
import WhatsAppChat from './components/WhatsAppChat'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const storedUser = localStorage.getItem('kmc_user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
      setIsAuthenticated(true)
    }
  }, [])

  const login = (userData) => {
    setUser(userData)
    setIsAuthenticated(true)
    localStorage.setItem('kmc_user', JSON.stringify(userData))
  }

  const logout = () => {
    setUser(null)
    setIsAuthenticated(false)
    localStorage.removeItem('kmc_user')
  }

  return (
    <Router>
      <div className="app">
        <Navbar isAuthenticated={isAuthenticated} user={user} logout={logout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login login={login} />} />
          <Route path="/signup" element={<Signup login={login} />} />
          <Route path="/dashboard" element={isAuthenticated ? <Dashboard user={user} /> : <Navigate to="/login" />} />
          <Route path="/properties" element={isAuthenticated ? <Properties user={user} /> : <Navigate to="/login" />} />
          <Route path="/inspections" element={isAuthenticated ? <Inspections user={user} /> : <Navigate to="/login" />} />
          <Route path="/documents" element={isAuthenticated ? <Documents user={user} /> : <Navigate to="/login" />} />
          <Route path="/settings" element={isAuthenticated ? <Settings user={user} logout={logout} /> : <Navigate to="/login" />} />
        </Routes>
        <Footer />
        <WhatsAppChat />
      </div>
    </Router>
  )
}

export default App