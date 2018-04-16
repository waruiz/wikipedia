const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: true } ) );
app.use( '/', express.static( path.join(__dirname, '/client/public/') ) );
