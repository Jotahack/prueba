require("dotenv").config();
const http = require("http");
const fs = require("fs");

function requestContoller(req, res) {
  const url = req.url;
  const metodo = req.method;
  console.log({ url, metodo });

  if (metodo === "GET" && url ==="/") {
    res.setHeader("Content-type", "text/html; charset=utf-8");
    fs.readFile('./login.html', function(err, file){
      if(err){
        console.log("hubo un error")
      }
       res.write(file);
       res.end();

    })
   
    return 
  }

  if (metodo === "GET" && url ==="/agregar-cliente") {
    res.setHeader("Content-type", "text/html; charset=utf-8");
    fs.readFile('./agregarcliente.html', function(err, file){
      if(err){
        console.log("hubo un error")
      }
       res.write(file);
       res.end();
      })   
    return 
  }


  res.setHeader("Conten-type","text/html; charset=utf-8")
  res.write("<h1> no esta amor </h1>")
  res.end()

}

// Configuración del servidor
const servidor = http.createServer(requestContoller);

const PORT = process.env.PORT;

servidor.listen(PORT, function () {
  console.log("Aplicación corriendo en el puerto: " + PORT);
});
