const http = require("http")

 function requestContoller(){
    console.log ("holamundo ")
 }
 //configuracion del servidor
 const servidor = http.createServer(requestContoller)

 servidor.listen(4000)
 