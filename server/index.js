require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const app = express();

const controller = require('./controller');

massive(process.env.CONNECTION_STRING).then(dbInstance => {
  app.set('db', dbInstance);
});

app.use(bodyParser.json());
app.use(cors());

app.get('/api/chores', controller.getChores);
app.post('/api/add', controller.addChore);
app.delete('/api/chores/:id', controller.deleteChore);

const port = 4000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
