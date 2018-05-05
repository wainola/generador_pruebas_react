const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./router');
const cors = require('cors');

const port = 4555;
const app = express();

app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}));
router(app);
const server = http.createServer(app);
server.listen(port);
console.log('====================================');
console.log('Listening on port 4555');
console.log('====================================');