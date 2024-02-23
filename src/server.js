const express = require("express") // Use express.js module 
const http = require("http")

const app = express()

http.createServer(app).listen(3000)