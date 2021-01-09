import express from 'express'
import players from '../controllers/players.js'
import teams from '../controllers/teams.js'

const router = express.Router()

router.route('/players')
  .get(players.index)

router.route('/players/:id')
  .get(players.show)

router.route('/teams')
  .get(teams.index)
  .post(teams.create)

router.route('/teams/:id')
  .get(teams.show)

export default router