const express = require("express")
const {createServer} = require("http")
const path = require("path")
const {Server} = require("socket.io")

const app = express()
const server = createServer(app);
const io = new Server(server);

app.get('/', (req, res)=>{
    // res.send('<h1>Hi Devs</h1>')
    res.sendFile(path.resolve('./index.html'))
});

io.on('connection', (socket)=>{
    console.log("A user is connected")
})

server.listen(4001, ()=>{
    console.log("Server is listening on http://localhost:4001")
})