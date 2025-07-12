const express = require('express');
const app = express();
const http = require('http').Server(app);
const path = require('path');

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

http.listen(3000, () => {
  console.log('🚀 Stream server running at http://localhost:3000');
});
