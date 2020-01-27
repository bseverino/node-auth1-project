const express = require('express')

const apiRouter = require('./api-router.js')
const configureMiddleware = require('../middleware/configure-middleware.js/index.js')

const server = express()

configureMiddleware(server)

server.use('/api', apiRouter)

module.exports = server
