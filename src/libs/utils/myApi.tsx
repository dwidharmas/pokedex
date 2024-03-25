import axios from "axios";
const myApi = axios.create({
  baseURL: process.env.POKEDEX_URL,
  timeout: 60000
})

export default myApi