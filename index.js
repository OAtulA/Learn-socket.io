const express = require("express")
const { createServer } = require("http")
const path = require("path")
const { Server } = require("socket.io")

const app = express()
const AppServer = createServer(app);
const io = new Server(AppServer);

app.get('/', (req, res) => {
  // res.send('<h1>Hi Devs</h1>')
  res.sendFile(path.resolve('./index.html'))
});

io.on('connection', (socket) => {
  console.log("A user is connected")
  socket.on('disconnect', () => {
    console.log("User disconnected.")
  })
  // socket.on('chat message', (msg)=>{
  //     // console.log("message", msg)
  //     io.emit('chat message', msg)
  // });


  // socket.on('request', (arg1, arg2, callback) => {
  //     console.log(arg1); // { foo: 'bar' }
  //     console.log(arg2); // 'baz'
  //     callback({
  //         status: 'ok'
  //     });
  // });

  /* Something is wrong here */
  // socket.on('request', (message, callback) => {
  //   console.log(message);
  //   callback({status: 'ok'});
  // })


    socket.on('request', (arg1, arg2, callback) => {
      console.log(arg1); // { foo: 'bar' }
      console.log(arg2); // 'baz'
      callback({
        status: 'ok'
      });
    });

  })

AppServer.listen(4001, () => {
  console.log("Server is listening on http://localhost:4001")
})