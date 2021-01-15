import React from 'react'
import { getAllPlayers } from '../../lib/api'
import Nav from '../common/Nav'
import { Link } from 'react-router-dom'

function PlayerIndex() {
  const [players, setPlayers] = React.useState(null)
  const [formdata, setFormdata] = React.useState('')


  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getAllPlayers()
        setPlayers(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  const filteredPlayers = players ? players.filter(player => (
    player.webName.toLowerCase().includes(formdata.toLowerCase()) || player.team.toLowerCase().includes(formdata.toLowerCase()) || player.firstName.toLowerCase().includes(formdata.toLowerCase()) || player.position.toLowerCase().includes(formdata.toLowerCase())
  )) : null

  const handleInput = event => {
    const value = event.target.value
    setFormdata(value)
  }



  return (
    <div className="team-index-container">
      <div className="s-nav">
        <Nav />
      </div>
      <div className="team-row-container">
        <div className="logo"></div>
        <div className="search-bar">
          <div>
            <label className="label-show">
              <input
                className="input-show"
                placeholder="Search"
                name="search"
                onChange={handleInput}
              />
            </label>
          </div>
        </div>
        {players && filteredPlayers.map(player => (
          <div key={player._id}>
            <Link to={`/players/${player._id}`} style={{ textDecoration: 'none', color: 'black' }}>
              <div className="team-row">
                <div className="team-row-items">
                  <p className="team-row-name">{player.firstName} {player.secondName}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PlayerIndex