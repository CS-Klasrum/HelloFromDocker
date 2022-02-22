import http from 'http'
import log from './logger.js'

const server = http.createServer((req, res) => {
  // Log Transactions
  log(req)

  res.end('Hello from Docker')
})

server.listen(3000, () => {
  console.log('App from docker is running...')
})
