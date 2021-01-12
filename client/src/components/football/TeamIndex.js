import React from 'react'
import { getAllTeams } from '../../lib/api'
import TeamTable from './TeamTable'
import Nav from '../common/Nav'

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

  teams ?
    teams.map((team, index) => {
      let colorOption = ''
      if ( index % 2 ) {
        colorOption = 'even'
        console.log(colorOption)
      } else { 
        colorOption = 'odd'
        console.log(colorOption)
      }
    })
    :
    console.log('loading')

  return (
    <div>
      <Nav />
      <hr />
      <div>
        {teams && teams.map(team => (
          <TeamTable key={team._id} {...team} />
        ))}
      </div>
    </div>
  )
}

export default TeamIndex