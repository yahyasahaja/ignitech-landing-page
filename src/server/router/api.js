//MODULES
import express from 'express'

//INIT
import Portfolios from '../controller/Portfolios'
import News from '../controller/News'

const app = express.Router()
app.use((req, res, next) => {
  res.header('Content-Type', 'application/json')
  next()
})

//ROUTER
app.use('/portfolios', Portfolios)
app.use('/news', News)

export default app 