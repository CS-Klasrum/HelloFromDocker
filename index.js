import http from 'http'

const server = http.createServer((req, res) => {
  res.end('Hello from Docker')
})

server.listen(3000, () => {
  console.log('App from docker is running...')
})
