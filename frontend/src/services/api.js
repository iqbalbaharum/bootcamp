import axios from 'axios'

export const beApi = axios.create({
  baseURL: `https://goldfish-app-xsljf.ondigitalocean.app`
})