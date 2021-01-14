import React from 'react'
import { getAllPlayers } from '../../lib/api'
import Nav from '../common/Nav'

function PlayerIndex() {
  const [players, setPlayers] = React.useState(null)
  const [formdata, setFormdata] = React.useState('')

  const handleChange = event => {
    const value = event.target.value
    setFormdata(value)
    console.log(formdata)
  }

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


  // {players ?
  //   players.filter(player => {
  //     const truthy = player.web_name.toLowerCase().includes(formdata.toLowerCase())
  //     if ( truthy ===  {
  //       console.log(truthy)
  //     } else {
  //       return
  //     }
  //   })
  //   :
  //   console.log('loading players')
  // }


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
                onChange={handleChange}
                value={formdata}
              />
            </label>
          </div>
        </div>
        {players && players.map(player => (
          <div key={player._id}>
            <div className="team-row">
              <div className="team-row-items">
                <p className="team-row-name">{player.first_name} {player.second_name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PlayerIndex