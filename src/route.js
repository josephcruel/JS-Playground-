const express = require("express")
const path = require("path")
const http = require("http")

const app = express()

app.get("/", (req, res) => {
    res.end('Welcome to the Home page')
})

app.get("/about", (req, res) => {
    res.end('Welcome to the About page')
})

app.get("contacts", (req, res) => {
    res.end('Welcome to the Contacts page')
})

app.get("/hello/:who", (req, res) => {
    res.end("Hello, " + req.params.who + ".")
})

app.get("/sendnote", (req, res) => {
    const filePath = path.resolve(_dirname, "notes.txt")
    res.sendFile(filePath)
})

app.use ((req, res) => {
    res.statusCode = 404
    res.end("404!")
})

http.createServer(app).listen(3000)
