/**
 * Created by vlad on 1/20/2017.
 */

import express from 'express';
// import fs from 'fs';
// import http from 'http';
import socketIo from 'socket.io';

/* const server = http.createServer((req, res) => {
  /!*  res.writeHead(200, {'Content-Type': 'video/mp4'});
    fs.createReadStream('../video.mp4').pipe(res);*!/
}).listen(3001);*/


const app = express();
app.use(express.static(__dirname + '/public'));


/* const streamVideo =  fs.createReadStream('../video.mp4');
streamVideo.on('data', (data) => {
   console.log('data', data);
});*/


const server = app.listen(3001, () => {
    console.info('Listhening 3001');
});
const io = socketIo(server);
io.on('connection', (socket) => {
    console.log('connected');
    socket.emit('new', {hello: 'world'});
});


