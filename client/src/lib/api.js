import axios from 'axios'
import { getToken } from './auth'

const baseUrl = '/api'

export function headers() {
  return {
    headers: { Authorization: `Bearer ${getToken()}` }
  }
}

export function getAllTeams() {
  return axios.get(`${baseUrl}/teams`)
}

export function getSingleTeam(id) {
  return axios.get(`${baseUrl}/teams/${id}`)
}

export function getAllPlayers() {
  return axios.get(`${baseUrl}/players`)
}

export function createTeam(teamDataWithIds) {
  return axios.post(`${baseUrl}/teams`, teamDataWithIds, headers())
}

export function teamCommentCreate({ id, formdata }) {
  return axios.post(`${baseUrl}/teams/${id}/comments`, formdata, headers())
}

export function registerUser(formdata) {
  return axios.post(`${baseUrl}/register`, formdata)
}

export function loginUser(formdata) {
  return axios.post(`${baseUrl}/login`, formdata)
}