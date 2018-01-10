//MODULES
import axios from 'axios'
import express from 'express'

//CONFIG
import {
  GOOGLE_API_KEY,
  GOOGLE_BLOGGER_ENDPOINT,
  NEWS_BLOG_ID,
} from '../config'

//UTILS
import {
  mergeDefaultQueries,
} from '../utils'

//INIT
const app = express.Router()
const URL = `${GOOGLE_BLOGGER_ENDPOINT}/${NEWS_BLOG_ID}`

//ROUTE
app.get('/', (req, res) => {
  let queries = mergeDefaultQueries({
    maxResults: 6
  }, req.query)
  
  axios.get(`${URL}/posts?key=${GOOGLE_API_KEY}${queries}`)
  .then(posts => {
    res.json(posts.data)
  })
  .catch(err => {
    let errorResponse = err.response.data
    
    res.status(errorResponse.error.code).json(errorResponse)
  })
})

app.get('/:postId', (req, res) => {
  let { postId } = req.params
  let queries = mergeDefaultQueries({
    maxResults: 6
  }, req.query)
  
  axios.get(`${URL}/posts/${postId}?key=${GOOGLE_API_KEY}${queries}`)
  .then(posts => {
    res.json(posts.data)
  })
  .catch(err => {
    let errorResponse = err.response.data
    
    res.status(errorResponse.error.code).json(errorResponse)
  })
})

export default app