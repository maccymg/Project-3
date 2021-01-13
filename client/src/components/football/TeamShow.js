import React from 'react'
import { getSingleTeam, teamCommentCreate } from '../../lib/api'
import { useParams, Link, useHistory } from 'react-router-dom'

function TeamShow() {
  const history = useHistory()
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

  const [formdata, setFormdata] = React.useState({
    text: '',
    rating: ''
  })

  const handleChange = event => {
    setFormdata({ ...formdata, [event.target.name]: event.target.value })
  }

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      const { data } = await teamCommentCreate({ id, formdata })
      console.log(data)
      history.push(`/teams/${data._id}`)
    } catch (err) {
      console.log(err)
    }
  }

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
          <div className="team-show-row-container">
            <div className="team-show-name">
              <p className="team-show-name-item">{team.name}</p>
              <p>{`Owner: ${team.owner.username}`}</p>
              <Link to={'/teams'}>Back to Teams</Link>
            </div>
            <div className="team-show-name-input">
              <form onSubmit={handleSubmit}>
                <div>
                  <label className="label-show">
                    <input
                      className="input-show"
                      placeholder="Text..."
                      name="text"
                      onChange={handleChange}
                      value={formdata.text}
                    />
                  </label>
                </div>
                <div>
                  <label className="label-show">
                    <input
                      className="input-show"
                      placeholder="Rating... (0-100)"
                      name="rating"
                      onChange={handleChange}
                      value={formdata.rating}
                    />
                  </label>
                </div>
                <div className="team-show-submit">
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
            <div className="team-show-comments-container">
              {team.comments.map((comment, i) => 
                <div key={i}>
                  <div className="team-show-row">
                    <div className="team-show-row-item">{comment.text}</div>
                    <div className="team-show-row-item">{`Rating: ${comment.rating}`}</div>
                    <div className="team-show-row-item">{comment.owner.username}</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        :
        <h1>{'...loading'}</h1>
      }
    </div>
  )
}

export default TeamShow