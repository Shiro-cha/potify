// https-server.js
const { createServer } = require('https')
const { parse } = require('url')
const next = require('next')
const fs = require('fs')
const path = require('path')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

// const httpsOptions = {
//   key: fs.readFileSync(path.join(__dirname, 'cert', 'key.pem')),
//   cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem')),
// }
const httpsOptions = {
    key: fs.readFileSync(path.join(__dirname, 'cert', 'localhost-key.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'cert', 'localhost.pem')),
  }
  

app.prepare().then(() => {
  createServer(httpsOptions, (req, res) => {
    const parsedUrl = parse(req.url, true)
    handle(req, res, parsedUrl)
  }).listen(3000, () => {
    console.log('> Ready on https://127.0.0.1:3000')
  })
})
