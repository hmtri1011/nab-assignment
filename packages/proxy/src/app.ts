import express from 'express'
import router from './routes'

const app: express.Application = express()

app.use('/api', router)

app.listen(4000, () => {
  console.log('Proxy is listening on port 4000!')
})
