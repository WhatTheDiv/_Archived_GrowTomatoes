const express = require('express')
const path = require ('path')
const PORT = 3001;
const app = express()

app.use(express.static(path.join(__dirname,'../client/build')))

app.get('/',(req,res) => {
  res.sendFile(path.join(__dirname,'../client/build', 'index.html'))
})

app.listen(PORT, () => `Server listening on port ${PORT}`)