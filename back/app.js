const fs = require('fs');
const express = require('express');
const cors = require('cors');
const users = require('./users.json');
const photos = require('./photos.json');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// USERS
app.get('/users', (req, res) => {
  res.send(users.list);
});

app.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.list[id];
  res.status(200).json(user);
});

app.post('/users', (req, res) => {
  console.log(req.body);
  users.list.push(req.body);
  const json = JSON.stringify(users);
  fs.writeFile('./users.json', json, 'utf8', (err) => { if (err) throw err; });
  res.status(200).json(users.list);
});

// PHOTOS
app.get('/photos', (req, res) => {
  res.send(photos.list);
});

app.get('/photos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const photo = photos.list[id];
  res.status(200).json(photo);
});

app.post('/photos', (req, res) => {
  photos.list.push(req.body);
  const json = JSON.stringify(photos);
  fs.writeFile('./photos.json', json, 'utf8', (err) => { if (err) throw err; });
  res.status(200).json(photos.list);
});

app.listen(port, () => {
  console.log(`Listening at ${port}`);
});
