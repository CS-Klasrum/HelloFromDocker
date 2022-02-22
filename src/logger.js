const log = (req) => {
  const { url, method, host, socket } = req || {}
  const usersIp = req.headers['x-forwarded-for'] || socket?.remoteAddress || ''
  const timestamp = new Date().toGMTString()

  console.log(`${timestamp}: ${method} at ${url} from ${usersIp} to ${host || 'localhost'}`)
}

export default log
