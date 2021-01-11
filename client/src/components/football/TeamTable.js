import React from 'react'
import { Link } from 'react-router-dom'

function TeamTable({  _id, name, owner }) {
  return (
    <div>
      <Link to={`/teams/${_id}`}>
        <div>{name}</div>
        <div>{owner.username}</div>
      </Link>
    </div>
  )
}

export default TeamTable