import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://foodexplorerback-end-axelselbach.koyeb.app/',
})

export const imagesAPI = axios.create({
  baseURL:
    'https://black_hole-3kf-1-y7475786.deta.app/api/integration/rk8nimlzmyls',
})
