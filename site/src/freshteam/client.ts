import axios from 'axios'

const TOKEN = process.env.FRESHTEAM_TOKEN
const API_URL = process.env.FRESHTEAM_URL + '/api/'

export const client = axios.create({
  baseURL: `${API_URL}`,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${TOKEN}`,
  },
})
