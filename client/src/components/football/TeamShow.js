import React from 'react'
import { getSingleTeam } from '../../lib/api'
import { useParams, Link } from 'react-router-dom'

function TeamShow() {
  const [team, setTeam] = React.useState(null)
  const { id } = useParams()

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getSingleTeam(id)
        setTeam(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [id])

  return (
    <div className="team-show-container">
      <div className ="logo">
      </div>
      {team ?
        <div className="team-show-main">
          <div className="team-show-player">
            <section className="team-show-player-section">
              <div className="shirt-team-show"></div>
              <div className="shirt-team-show"></div>
              <div className="shirt-team-show"></div>
            </section>
            <section className="team-show-player-section">
              {team.attackers.map((attacker, i) =>
                <div key={i}>
                  <p>{attacker.web_name}</p>
                </div>
              )}
            </section>
            <section className="team-show-player-section">
              <div className="shirt-team-show"></div>
              <div className="shirt-team-show"></div>
              <div className="shirt-team-show"></div>
            </section>
            <section className="team-show-player-section">
              {team.midfielders.map((midfielder, i) =>
                <div key={i}>
                  <p>{midfielder.web_name}</p>
                </div>
              )}
            </section>
            <section className="team-show-player-section">
              <div className="shirt-team-show"></div>
              <div className="shirt-team-show"></div>
              <div className="shirt-team-show"></div>
              <div className="shirt-team-show"></div>
            </section>
            <section className="team-show-player-section">
              {team.defenders.map((defender, i) =>
                <div key={i}>
                  <p>{defender.web_name}</p>
                </div>
              )}
            </section>
            <section className="team-show-player-section">
              <div className="shirt-team-show"></div>
            </section>
            <section className="team-show-player-section">
              <div>{team.goalkeeper.web_name}</div>
            </section>
          </div>
          <div className="team-show-info">
            <div>{team.name}</div>
            <div>{team.owner.username}</div>
            {team.comments.map((comment, i) => 
              <div key={i}>
                <p>{comment.text}</p>
                <p>{comment.rating}</p>
                <p>{comment.owner.username}</p>
              </div>
            )}
            <Link to={'/teams'}>Back to Teams</Link>
          </div>
        </div>
        :
        <h1>{'...loading'}</h1>
      }
    </div>
  )
}

export default TeamShow