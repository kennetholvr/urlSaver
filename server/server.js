//create and export express 
const morgan = require('morgan')
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database_helpers')

const app = express()

const logger = ({method, path, body}, res, next) =>{
  console.log(`*** ${method} to ${path} ***`)
  if(body) {console.log(`*** ${JSON.stringify(body)} ***`)}
  next();
}

app.use(logger);
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(morgan('combined'))
app.use(express.static('client'));

app.post('/links', (req, res)=>{
  console.log(req.body)
  res.send(201);
})

//export the app
module.exports = app;