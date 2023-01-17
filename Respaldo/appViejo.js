import http from 'http';

http.createServer( ( req, res ) => { // 'req' = 'request' es lo que estan solicitando por parte del cliente, y la 'res' = 'response' es lo que el servidor le va a responder al cliente

   // res.writeHead(200, { 'Content-Type': 'application/json'}); //estado - tipo de objeto que se devuelve.

    console.log(req);
res.write('Hola Mundo');
res.end(); // Para avisar que ya termine de dar mi respuesta

})

.listen( 8080 ) //Para espesificar el puerto donde quiero que corra la aplicacion, el puerto 80 siempre esta ocupado y el 8080 es un puerto tradicional para pruebas web
console.log('Escuchando el puerto ', 8080)