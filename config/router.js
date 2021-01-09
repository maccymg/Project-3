import express from 'express'
import players from '../controllers/players.js'
import teams from '../controllers/teams.js'
import users from '../controllers/users.js'
import auth from '../controllers/auth.js'
import secureRoute from '../lib/secureRoute.js'

const router = express.Router()

router.route('/players')
  .get(players.index)

router.route('/players/:id')
  .get(players.show)

router.route('/teams')
  .get(teams.index)
  .post(secureRoute, teams.create)

router.route('/teams/:id')
  .get(teams.show)
  .delete(secureRoute, teams.delete)

router.route('/users')
  .get(users.index)

router.route('/register')
  .post(auth.registerUser)

router.route('/login')
  .post(auth.loginUser)

export default router