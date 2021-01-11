import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
      <div className="navbar">
        <div className="navbar-item">
          <Link to="/teams/new">Create Team</Link>
        </div>
        <div className="navbar-item">
          <Link to="/teams">Teams</Link>
        </div>
        <div className="navbar-item">
          <Link to="/register">Register</Link>
        </div>
        <div className="navbar-item">
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  )
}

export default Nav