import axios from 'axios'
import credentials from '../../credentials.js'

const apiClient = axios.create({
  baseURL: 'https://www.benbb96.com/fr/tracker/api',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  auth: credentials,
})

export default {
  getTrackers() {
    return apiClient.get('/tracker')
  },
  getTracker(id) {
    return apiClient.get('/tracker/' + id)
  },
}
