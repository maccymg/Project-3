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
    <div>
      {team ?
        <div>
          <div>{team.name}</div>
          <div>{team.owner.username}</div>
          <div>Team:</div>
          <hr />
          <div>{team.goalkeeper.web_name}</div>
          <hr />
          {team.defenders.map((defender, i) =>
            <div key={i}>
              <p>{defender.web_name}</p>
            </div>
          )}
          <hr />
          {team.midfielders.map((midfielder, i) =>
            <div key={i}>
              <p>{midfielder.web_name}</p>
            </div>
          )}
          <hr />
          {team.attackers.map((attacker, i) =>
            <div key={i}>
              <p>{attacker.web_name}</p>
            </div>
          )}
          <hr />
          <div>Comments</div>
          {team.comments.map((comment, i) => 
            <div key={i}>
              <p>{comment.text}</p>
              <p>{comment.rating}</p>
            </div>
          )}
          <Link to={'/teams'}>Back to Teams</Link>
        </div>
        :
        <h1>{'...loading'}</h1>
      }
    </div>
  )
}

export default TeamShow