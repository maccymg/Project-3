import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { isAuthenticated, logout } from '../../lib/auth'


function Nav() {

  const isLoggedIn = isAuthenticated()
  const history = useHistory()


  const handleLogout = () => {
    logout()
    history.push('/teams')
  }

  return (
    <div>
      <div className="navbar">
        <div className="navbar-item">
          <Link to="/teams/new" style={{ textDecoration: 'none', color: 'black' }}>Create Team</Link>
        </div>
        <div className="navbar-item">
          <Link to="/teams" style={{ textDecoration: 'none', color: 'black' }}>Teams</Link>
        </div>
        <div className="navbar-item">
          <Link to="/players" style={{ textDecoration: 'none', color: 'black' }}>Players</Link>
        </div>
        {!isLoggedIn ?
          <div className="navbar-item-login">
            <Link to="/register" style={{ textDecoration: 'none', color: 'black' }}>
              Register
            </Link>
            <div className="navbar-item-login">
              <Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>
                Log in
              </Link>
            </div>
          </div>
          :
          <button className="navbar-item" onClick={handleLogout}>Log Out</button>
        }
      </div>
    </div>
  )
}

export default Nav