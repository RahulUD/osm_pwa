/* eslint-disable import/no-anonymous-default-export */
import Api from './api'
import { POSTS } from './endpoints'

export default {
  getPosts() {
    return Api().get(POSTS)
  }
}