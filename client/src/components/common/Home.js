import React from 'react'
import { Link } from 'react-router-dom'

function Home() {

  return (
    <div className="home-container">
      <Link to={'/teams'} style={{ textDecoration: 'none', color: 'Purple' }}>
        <header className="home-header">
          <h1>Premier League Squads</h1>
        </header>
        <main className="home-main">
          <img className="trophy-image" src='https://www.epicicons.com/assets/images/general/Case-Study-Images/_1200x630_crop_center-center_82_none/2550.-Trophy-case-study-1200-pix.jpg?mtime=1559573404' alt="player"></img>
        </main>
      </Link>
    </div>
  )
}

export default Home