const express = require('express');
const app = express()
const morgan = require('morgan')
const port = process.env.PORT || 3000;


app.use(morgan('combined'))

app.use(express.static('client'));

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))