import React, { useEffect, useState } from 'react'
import Logo from 'assets/logoNew.png'
import { useLocation, useNavigate, NavigateFunction } from 'react-router-dom'
import './navbar.css'

const NavBar = () => {
  const navigate: NavigateFunction = useNavigate()
  const location = useLocation()

  const [activeLink, setActiveLink] = useState<string>('')

  useEffect(() => {
    const currentPath = location.pathname
    if (currentPath === '/') {
      setActiveLink('/')
    } else if (currentPath.startsWith('/menu')) {
      setActiveLink('/menu')
    } else if (currentPath === '/cart') {
      setActiveLink('/cart')
    }
  }, [location])

  return (
    <div className="navbarContainer">
      <img src={Logo} alt="Expressoft Logo" className="logo" />
      <div className="navLinks">
        <p
          className={`navLink ${activeLink === '/' ? 'active' : ''}`}
          onClick={() => navigate('/')}
        >
          Home
        </p>
        <p
          className={`navLink ${activeLink === '/menu' ? 'active' : ''}`}
          onClick={() => navigate('/menu')}
        >
          Menu
        </p>
        <p
          className={`navLink ${activeLink === '/cart' ? 'active' : ''}`}
          onClick={() => navigate('/cart')}
        >
          Cart
        </p>
      </div>
    </div>
  )
}

export default NavBar
