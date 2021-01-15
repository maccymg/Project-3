import React from 'react'
import { getSinglePlayer } from '../../lib/api'
import { useParams, Link } from 'react-router-dom'

function PlayerShow() {
  const [player, setPlayer] = React.useState(null)
  const { id } = useParams()


  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getSinglePlayer(id)
        setPlayer(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [id])


  return (
    <div className="player-show-container">
      <div className ="logo">
      </div>
      {player ?
        <div className="player-show-main">
          <div className="player-show-image">
            <img className="player-image" src={player.image} alt="player"></img>
          </div>
          <div className="player-show-row-container">
            <div className="player-show-team">
              <div className="player-show-player-name">{player.firstName} {player.secondName}</div>
            </div>
            <div className="team-show-comments-container">
              <div className="player-show-row">
                <div>{`Team: ${player.team}`}</div>
              </div>
              <div className="player-show-row">
                <div>{`Known As: ${player.webName}`}</div>
              </div>
              <div className="player-show-row">
                <div>{player.position}</div>
              </div>
              <div className="player-show-row">
                <Link to={'/players'}>Back to Players</Link>
              </div>
            </div>
          </div>
        </div>
        :
        <h1>{'...loading'}</h1>
      }
    </div>
  )
}

export default PlayerShow