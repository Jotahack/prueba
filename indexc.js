require ("dotenv").config()
const http = require("http")

 function requestContoller(){
    console.log ("holamundo ")
 }
 //configuracion del servidor
 const servidor = http.createServer(requestContoller)

const PORT = process.env.PORT

 servidor.listen(PORT,function(){
   console.log ("aplicacion corriendo por puerto"+PORT)
 })
 