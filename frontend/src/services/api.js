import axios from 'axios'

export const beApi = axios.create({
  baseURL: process.env.BE_API
})
