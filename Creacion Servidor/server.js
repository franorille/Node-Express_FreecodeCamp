/*
Módulo http permite transmitr información con protocolo http.
Permite crear un servidor que va a escuchar cuando le solicitamos información
*/
const http = require("http"); //importamos módulo http

//constante para almacenar el servidor
/*
  req -- objeto parámetro que representa la información de solicitud http del cliente al servidor -- asignado automáticamente
  
  */

//res -- objeto parámetro que representa respuesta http del servidor -- asignado automáticamente

// Creación de servidor a través del método createServer. Cada vez que reciba una solicitud ejecutará la función pasada por parámetro

const servidor = http.createServer((req, res) => {
  /*SOLICITUDES REQ*/
  //console.log(req);
  //   console.log(req.url);

  //   /* propiedad url del objeto request. Indica ruta desde página principal que sería / Es decir, indica la ruta que escribimos desde el dominio de la pagina
  //     por ejemplo si en el navegador escribimos http://localhost:3000/freecodecamp -- obtenemos /freecodecamp
  //   */

  //   console.log(req.method);

  //   /*.method indica el verbo http de la solicitud*/

  //   console.log(req.headers);
  //   /*.headers para ver los headers de la solicitud que es recibida por el servidor
  //   Incluye mucha información, como :
  //   host
  //   parámetros de la conexión
  //   parámetros que indican al servidor que tipo de archivos podemos aceptar
  //   El tipo de codificación... etc.*/

  /*RESPUESTAS RES*/

  //  console.log(res);

  // res.statusCode = 404;
  console.log(res.statusCode);

  /*
statusCode indica el código de estado de la respuesta. Es posible modificar ese código de estado devuelto por el servidor cuando enviemos la respuesta
res.statusCode = 404;
*/

  res.setHeader('content-type','application/json');
  console.log(res.getHeaders()); // método para obtener los elementos de la cabecera

  /*setHeader método que configura un elemento de la cabecera de la respuesta que supone información adicional a enviar al cliente
  Por ejemplo especificar el típo de contenido que estamos enviando con 'content-type', 'application/json' que idica que enviamos un application/json*/

  res.end("Hola Mundo!"); // método para enviar la respuesta al cliente terminando el proceso. Se pasa por argumento el resultado a enviar al cliente
});

const PUERTO = 3000;

servidor.listen(PUERTO, () => {
  console.log(`El servidor está a la escucha en http://localhost:${PUERTO}`);
});

/*
listen(puerto, callback)
1º parametro, puerto por el que escucha el servidor. 
Ubicación virtual del sistema operativo en el que se puede acceder a una apliación o a un proceso específico que se esté ejecutando en ese puerto.
2º función que queremos ocurra cuando el servidor comience a ejecutarse y escuchar solicitudes (antes de recibir peticiones)
*/

/*anexo -- extension REST client para probar servidores generando distintos tipos de solicitudes
Se crea un nuevo archivo con extensión .http y se escribre verboHTTP + url 
Posteriormente pichamos en send request
Porque desde navegador solo podemos hacer solicitudes GET cuando introducimos url en navegador 
*/
