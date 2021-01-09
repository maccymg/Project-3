import { notFound } from '../lib/errorHandler.js'
import Player from '../models/player.js'

async function playerIndex(_req, res, next) {
  try {
    const players = await Player.find()
    return res.status(200).json(players)
  } catch (err) {
    next(err)
  }
}

async function playerShow(req, res, next) {
  const { id } = req.params
  try {
    const player = await Player.findById(id)
    if (!player) throw new Error(notFound)
    return res.status(200).json(player)
  } catch (err) {
    next(err)
    return res.status(404).json({ 'message': 'Not Found' })
  }
}




export default {
  index: playerIndex,
  show: playerShow,
}

// app.get('/teams', async(req, res) => {
//   const teams = await Player.find()
//   return res.status(200).json(teams)
// })

// app.post('/teams', async(req, res) => {
//   try {
//     const newTeam = await Team.create(req.body)
//     return res.status(201).json(newTeam)
//   } catch (err) {
//     console.log(err)
//     return res.status(422).json(err)
//   }
// })