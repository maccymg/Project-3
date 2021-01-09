import Team from '../models/team.js'
import { notFound } from '../lib/errorHandler.js'

async function teamIndex(_req, res, next) {
  try {
    const players = await Team.find().populate('midfielders').populate('attackers').populate('defenders').populate('goalkeeper')
    return res.status(200).json(players)
  } catch (err) {
    next(err)
  }
}

async function teamShow(req, res, next) {
  const { id } = req.params
  try {
    const player = await Team.findById(id).populate('midfielders').populate('attackers').populate('defenders').populate('goalkeeper')
    if (!player) throw new Error(notFound)
    return res.status(200).json(player)
  } catch (err) {
    next(err)
    return res.status(404).json({ 'message': 'Not Found' })
  }
}

async function teamCreate(req, res, next) {
  try {
    const newTeamData = { ...req.body }
    const newTeam = await Team.create(newTeamData)
    const popTeam = await Team.findById(newTeam.id).populate('midfielders').populate('attackers').populate('defenders').populate('goalkeeper')
    return res.status(201).json(popTeam)
  } catch (err) {
    next(err)
  }
}

async function teamDelete(req, res, next) {
  const { id } = req.params
  try {
    const teamToDelete = await Team.findById(id)
    if (!teamToDelete) throw new Error(notFound)
    await teamToDelete.remove()
    return res.sendStatus(204)
  } catch (err) {
    next(err)
  }
}



export default {
  index: teamIndex,
  show: teamShow,
  create: teamCreate,
  delete: teamDelete,
}