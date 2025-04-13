import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Home.css'

const Home: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="HomePage">
      <header className="HomeHeader">
        <h1 className="HomeTitle">Welcome to Digital Menu</h1>
        <p className="HomeSubtitle">
          Explore our delicious offerings and place your order!
        </p>
      </header>
      <div className="HomeContent">
        <button
          className="HomeButton"
          onClick={() => {
            navigate('/menu')
          }}
        >
          View Menu
        </button>
      </div>
    </div>
  )
}

export default Home
