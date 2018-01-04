//MODULES
import express from 'express'

//INIT
import Portfolios from '../controller/Portfolios'

const app = express.Router()
app.use((req, res, next) => {
  res.header('Content-Type', 'application/json')
  next()
})

//ROUTER
app.use('/portfolios', Portfolios)

export default app 