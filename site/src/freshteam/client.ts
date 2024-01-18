import axios from 'axios'

const API_URL = `${process.env.FRESHTEAM_API_URL}/hire/widgets`

export const client = axios.create({
  baseURL: `${API_URL}`,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})
