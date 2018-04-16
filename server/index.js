const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: true } ) );
app.use( '/', express.static( path.join(__dirname, '../client/public/') ) );

app.get('/*', (req, res) => {
  res.sendFile( path.join(__dirname, '../client/public/index.html'), err => {
    err ? res.status(500).send(err) : null;
  } )
})

const PORT = 1337;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
