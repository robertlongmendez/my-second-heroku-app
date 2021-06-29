// Install Express Server
const express = require('express');
const path = require('path');
const app = express();
// Server only are stactic files from the dist directory
app.use(express.static('./dist/my-second-heroku-app'));
app.get('/*', (req, res) =>
res.sendFile('index.html', {root: 'dist/my-second-heroku-app'}),
);
// Tell the app how to start on Heroku
app.listen(process.env.PORT || 8080);
