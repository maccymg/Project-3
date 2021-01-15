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
          <Link to="/" style={{ textDecoration: 'none', color: 'Purple' }}>Home</Link>
        </div>
        <div className="navbar-item">
          <Link to="/teams/new" style={{ textDecoration: 'none', color: 'green' }}>Create Team</Link>
        </div>
        <div className="navbar-item">
          <Link to="/teams" style={{ textDecoration: 'none', color: 'green' }}>Teams</Link>
        </div>
        <div className="navbar-item">
          <Link to="/players" style={{ textDecoration: 'none', color: 'green' }}>Players</Link>
        </div>
        {!isLoggedIn ?
          <div className="navbar-item-login">
            <Link to="/register" style={{ textDecoration: 'none', color: 'red' }}>
              Register
            </Link>
            <div className="navbar-item-login">
              <Link to="/login" style={{ textDecoration: 'none', color: 'blue' }}>
                Log in
              </Link>
            </div>
          </div>
          :
          <button className="navbar-item button" onClick={handleLogout}>Log Out</button>
        }
      </div>
    </div>
  )
}

export default Nav