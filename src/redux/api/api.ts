import axios from 'axios'
import { BASE_URL } from './endpoints'
const AUTHORIZATION = 'Authorization'
const BEARER = 'Bearer'
const TOKEN = 'TOKEN'
let BaseApi =  axios.create({ baseURL: BASE_URL })

let Api = function() {
  let token = localStorage.getItem(TOKEN)
  if (token) {
    BaseApi.defaults.headers.common[AUTHORIZATION] = `${BEARER} ${token}`
  }
  return BaseApi
}
export default Api