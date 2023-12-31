import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3000',
})

export const imagesAPI = axios.create({
  baseURL:
    'https://black_hole-3kf-1-y7475786.deta.app/api/integration/rk8nimlzmyls',
})
