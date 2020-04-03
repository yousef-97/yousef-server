'use strict';

// mack avar express to use express lib
const express = require('express')

//initialize the express
const server = express();

//creat aport number
const PORT = process.env.PORT || 3000;

//you can access any file inside the public folder
server.use(express.static('./public'));

server.listen(PORT,()=>{
    console.log('WOW',PORT);

});

// http://localhost:3000/WOW
server.get('/WOW',(request,response)=>{
    response.send('im doing great');
    //you can use .json ()
})