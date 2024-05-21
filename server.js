const express = require('express')
const app = express()

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.listen(5000, () => {
  console.log(`Server listening on http://localhost:5000`)
})

// respond with "hello world" when a GET request is made to the homepage
app.post('/api/login', (req, res) => {
  res.json({ data: req.body })
})
