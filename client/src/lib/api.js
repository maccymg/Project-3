import axios from 'axios'

const baseUrl = '/api'

export function getAllTeams() {
  return axios.get(`${baseUrl}/teams`)
}

export function getSingleTeam(id) {
  return axios.get(`${baseUrl}/teams/${id}`)
}

export function getAllPlayers() {
  return axios.get(`${baseUrl}/players`)
}
