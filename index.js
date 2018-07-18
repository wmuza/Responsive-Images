"use strict";

const express = require('express');
const app = express();
const http = require('http').Server(app);
const fs = require('fs');

app.use('/images', express.static('images'))
app.use('/images_src', express.static('images_src'))
app.use('/ImageJS', express.static('ImageJS'))
app.use('/css', express.static('css'))

app.get('/', (req, res) =>  {
  res.sendFile(__dirname + '/'); 
});



http.listen(80, () => console.log('listening on *:80'));
    