import mongoose from 'mongoose'
import connectToDatabase from '../lib/connectToDb.js'
import Player from '../models/player.js'
import playerData from './data/players.js'
// import teamData from './data/teams.js'
// import Team from '../models/team.js'
import User from '../models/user.js'
import userData from './data/users.js'

async function seedDatabase() {
  try {
    await connectToDatabase()
    console.log('Database Connected')
    await mongoose.connection.db.dropDatabase()
    console.log('Database has dropped')
    const users = await User.create(userData)
    console.log(`${users.length} users created`)
    const players = await Player.create(playerData)
    // const teams = await Team.create(teamData)
    console.log(`${players.length} created`)
    // console.log(`${teams.length} created`)
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