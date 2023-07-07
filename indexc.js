require("dotenv").config();
const express = require('express')

const app = express()
const port = process.env.PORT 
//servir archivos estaticos 
app.use(express.static('public'));

//configurar ruta
app.get('/', (req, res) => {
  res.send('Hello World!')
})


//poner a escuchar el servidor 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
