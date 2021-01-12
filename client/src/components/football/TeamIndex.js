import React from 'react'
import { getAllTeams } from '../../lib/api'
import Nav from '../common/Nav'
import { Link } from 'react-router-dom'

function TeamIndex() {
  const [teams, setTeams] = React.useState(null)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getAllTeams()
        setTeams(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])
  console.log(teams)

  // const handleColorOptions = () => {
  //   teams ?
  //     teams.map((team, index) => {
  //       let colorOption = ''
  //       if ( index % 2 ) {
  //         colorOption = 'even'
  //         console.log(colorOption)
  //       } else { 
  //         colorOption = 'odd'
  //         console.log(colorOption)
  //       }
  //     })
  //     :
  //     console.log('loading')
  // }


  return (
    <div className="team-index-container">
      <div className="s-nav">
        <Nav />
      </div>
      <div className="team-row-container">
        <div className="logo"></div>
        <div className="search-bar">Search Bar</div>
        {teams && teams.map(team => (
          <div key={team._id}>
            {/* <div className={`"${handleColorOptions}"`}> */}
            <div className="team-row">
              <Link to={`/teams/${team._id}`} style={{ textDecoration: 'none', color: 'black' }}>
                <div className="team-row-items">
                  <p className="team-row-name">{team.name}</p>
                  {/* <p className="team-row-owner">{team.owner.username}</p> */}
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TeamIndex