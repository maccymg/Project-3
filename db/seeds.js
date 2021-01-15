import mongoose from 'mongoose'
import connectToDatabase from '../lib/connectToDb.js'
import Player from '../models/player.js'
import playerData from './data/players.js'
import teamData from './data/teams.js'
import Team from '../models/team.js'
import User from '../models/user.js'
import userData from './data/users.js'

function findPlayerIdByName(name, players) {
  return players.find(player => player.webName === name)._id
}

async function seedDatabase() {
  try {
    await connectToDatabase()
    console.log('Database Connected')

    await mongoose.connection.db.dropDatabase()
    console.log('Database has dropped')

    const users = await User.create(userData)
    console.log(`${users.length} users created`)

    const players = await Player.create(playerData)
    console.log(`${players.length} players created`)
    

    const teamsWithPlayers = teamData.map(team => {
      return {
        ...team,
        goalkeeper: findPlayerIdByName(team.goalkeeper, players),
        defenders: team.defenders.map(name => findPlayerIdByName(name, players)),
        midfielders: team.midfielders.map(name => findPlayerIdByName(name, players)),
        attackers: team.attackers.map(name => findPlayerIdByName(name, players)),
      }
    })
    const teamDataWithOwners = teamsWithPlayers.map(team => {
      team.owner = users[Math.floor(Math.random() * users.length)]._id
      return team
    })
    const addCommentOwners = teamDataWithOwners.map(team => {
      if (team.comments.length === 0) {
        console.log('no comments')
      } else {
        team.comments.map(comment => {
          comment.owner = users[Math.floor(Math.random() * users.length)]._id
          return comment
        })
      }
    })
    const teams = await Team.create(teamDataWithOwners, addCommentOwners)
    console.log(`${teams.length} teams created`)

    await mongoose.connection.close()
    console.log('Goodbye')

  } catch (err) {
    console.log('something went wrong')
    console.log(err)
  }
  await mongoose.connection.close()
  console.log('Goodbye')
}
seedDatabase()
