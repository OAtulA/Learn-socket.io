const express = require("express")
const {createServer} = require("http")
const path = require("path")

const app = express()
const server = createServer(app)

app.get('/', (req, res)=>{
    // res.send('<h1>Hi Devs</h1>')
    res.sendFile(path.resolve('./index.html'))
});

server.listen(4001, ()=>{
    console.log("Server is listening on http://localhost:4001")
})