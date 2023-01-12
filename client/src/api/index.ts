import axios, { AxiosRequestConfig } from 'axios'

const BASE_PATH = 'http://localhost:8080'

const api = axios.create({
  withCredentials: true,
  baseURL: BASE_PATH,
  headers: {
    Accept: 'application/json',
  },
})

export default api
