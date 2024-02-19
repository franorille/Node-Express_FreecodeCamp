/*
ROUTING--

Se refiere a manejar las solicitudes del cliente en base a ciertos criterios
Dos criterios principales:

-- El método de la solicitud HTTP:
        De esta forma el servidor sabe que tipo de operación se realizará
        Verbo que describe el propósito de la solicitud -- GET POST PUT DELETE ...
        Por tanto, el método es importante para determinar una ruta

-- El path:
        El camino de la solicitud http, para que el servidor sepa el recurso específico que se usará oque se modificará o eliminará
 

Por tanto, una ruta se puede describir como la combinación de estos tres elementos, el método el path y como se va a manejar.

Ejemplo, si recibes una solicitud get en un camino específico haz lo siguiente
si recibes una solicitud post en otro camino específico haz lo siguiente

Por tanto, el routing crea distintas rutas para ese servidor, para que el servidor sepa que es lo que tiene que hacer para manejar esa solicitud específica para ese camino en particular


*/

//MANEJO DE RUTAS EN NODE

const http = require("http");

const cursos = require("./cursos.js");

//Alternativa a lo anterior es usar sintaxis de desestructuración
// const {infoCursosAlias} = require("./cursos.js"); -- esto permitiría acceder a la propiedad infoCursosAlias, que es un objeto, y trabajar con este objeto directamente en el programa
//  sin usar la notación de putno adicional de cursos.infoCursosAlias o ccursos.infoCursosAlias.programacion permitiendo eliminar el primer cursos. y consiguiendo una sintaxis más clara

const servidor = http.createServer((req, res) => {
  const { method } = req; // sintaxis de desestrucutación para obtener el la propiedad método de la solicitud

  // const metodo= req.method; otra alternativa a lo anterior,

  switch (
    method // en función del método haremos unas cosas o otras
  ) {
    case "GET":
      return manejarSolicitudGet(req, res);
    //   break; como hacemos return, no es necesario porner un brake porque el return hace salir de la función

    case "POST":
      return manejarSolicitudPost(req, res);

    case "PUT":
      return manejarSolicitudPut(req, res);

    case "DELETE":
      return manejarSolicitudDelete(req, res);

    default:
      res.statusCode = 501; // el 501 indica que el servidor no soporta la funcionalidad necesaria para satisfacer la solicitud
      res.end(
        `El método usado no puede ser manejado por el servidor. El método es ${method}`
      );
      break;
  }
});

function manejarSolicitudGet(req, res) {
  const path = req.url; //saber el recurso o directorio a través del cual vamos a acutar

  if (path === "/") {
    // si estamos en la web principal de la aplicación
    console.log(res.statusCode); // mostrará 200 al ser el código de estado por defecto, por lo que no es necesario asignarlo explícitamente en el código. Para cualquier otro código de estado que queramos enviar si que necesitaremos asignarlo explicitamente
    // res.statusCode = 200; // asignamos código de todo correcto. Asignamos explícitamente el código 200 si la solicitud se proceso con éxito. Pero este código de estado se asigna por defecto a la respuesta, por lo que no sería necesario ponerlo explícitamente

    // res.writeHead(200,{'Content-Type':'applications/json'} );// método para configurar la cabecera, que es información adicional que se envía opcionalmente en la respuesta -- permite varios parámetros (codigo de estado (el 200 se asigna por defecto), {objeto con la información adicional  típicamente 'Content-Type':'applications/json')} )

    return res.end("Bienvenidos al servidor y API creado con Node.js");
  } else if (path === "/api/cursos") {
    res.statusCode = 200;
    return res.end(JSON.stringify(cursos.infoCursosAlias));
    //devolvemos la información de los cursos de cursos.js en formato JSON.
    // Para convertir a una cadena de caracteres con  formato JSON usamos método strignify de JSON.
    //Convirtiendo a string en formato json el objeto cursos, que es el módulo que contiene la iformación del archivo cursos.js
    // este módulo cursos tiene la propiedad cursos.infoCurosAlias que exportamos en el archivo cursos.js
    // Se está creando una API que proporciona información de los cursos disponibles en formato JSON cuando el cliente introduce la ruta localhost:3000/cursos
    // Generalmente es comun que a modo de convección iniciemos el camino de una api con la palabra api o un subdomino en la url al estilo /api/cursos
  } else if (path === "/api/cursos/programacion") {
    res.statusCode = 200;
    return res.end(JSON.stringify(cursos.infoCursosAlias.programacion)); // solo enviamos una parte del objeto infoCurosAlias
  }

  res.statusCode = 404;
  res.end("El recurso solicitado no existe");
}

// Como toda esta cadena de IF else se puede complicar mucho en una web más compleja
//se usa el framework EXPRESS, basado en node que permite escribir servidores de forma mucho más concisa

function manejarSolicitudPost(req, res) {
  // metodo post va a agregar información
  const path = req.url;
  if (path === "/api/cursos/programacion") {
    // solo manejamos este posible camino para permitir al usuario de agregar un curso sobre programación
    // res.statusCode = 200;

    let cuerpo = ""; // variable que representa el cuerpo de la solicitud POST, que es la información que vamos a recibir

    // método .on() para trabajar con eventos --

    // vamos a establecer que va a suceder cuando la solicitud request reciba información -- es un evento predeterminado llamado data como puede ser click etc...
    // cuando se reciba esa información convertiremos este contenido a una cadena de caracteres y asignarla al cuerpo
    req.on("data", (contenido) => {
      cuerpo += contenido.toString();
    });

    //cuando ocurra el evento end, es decir que se termine de recibir esa información, vamos a procesar esa información que asignamos a la variable cuerpo. Primero mostrandola en el terminal. Luego viendo el típo de dato
    req.on("end", () => {
      console.log(cuerpo);
      console.log(typeof cuerpo);

      cuerpo = JSON.parse(cuerpo); //método parse para convertir una cadena de caracteres en un objeto JavaScript
      console.log(typeof cuerpo);
      console.log(cuerpo.titulo);
      res.end(
        "El servidor recibio una solicitud POST para /cursos/programacion Aunque aqui solo aviso con un log, lo normal sería establecer los mecanismos oporturnos para agregar un curso a una BBDD o a este objeto. Esto lo haremos con Express en siguientes clases"
      );
    });
  }
  // res.statusCode = 404;
  // return res.end("El recurso solicitado no existe");
}

function manejarSolicitudPut(req, res) {
  // metodo put para actualizar información
  const path = req.url;
  if (path === "/api/cursos/programacion") {
    // solo manejamos este posible camino para permitir al usuario actualizar un curso sobre programación
    res.statusCode = 200;
    return res.end(
      "El servidor recibio una solicitud Put para /cursos/programacion Aunque aqui solo aviso con un log, lo normal sería establecer los mecanismos oporturnos para actualizar el curso contra una BBDD o contra  este objeto. Esto lo haremos con Express en siguientes clases"
    );
  }
}

function manejarSolicitudDelete(req, res) {
  // metodo delete para borrar información
  const path = req.url;
  if (path === "/api/cursos/programacion") {
    // solo manejamos este posible camino para permitir al usuario borrar un curso sobre programación
    res.statusCode = 200;
    return res.end(
      "El servidor recibio una solicitud DELETE para /cursos/programacion Aunque aqui solo aviso con un log, lo normal sería establecer los mecanismos oporturnos para borrar un curso a una BBDD o a este objeto. Esto lo haremos con Express en siguientes clases"
    );
  }
}

const PUERTO = 3000;

servidor.listen(PUERTO, () => {
  console.log(`el servidor está escuchando por el puerto ${PUERTO} `);
});
