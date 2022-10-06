const express = require('express')
const app = express()
const port = 3000

app.set('view-engine', 'ejs')

app.get('/', (req, res) => {
  res.send('Hello Giacomo!')
})

app.get('/registrazione',function(req,res) {
  res.sendFile('index.ejs');
});

app.get('/login', (req, res) => {
  res.send('Form di Login')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})