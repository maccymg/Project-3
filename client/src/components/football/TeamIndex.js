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