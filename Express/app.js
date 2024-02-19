const express = require("express"); // importar express

/*
Una vez tenemos importado express, tenemos acceso a una función que nos premite crear una aplicacion de express.
Es la función del mayor nivel que podemos tener para poder crear nuestra aplicación de express.

*/

const app = express();
/*
tomamos express(), llamando a esa función y eso retorna una aplicación de express (app) que es de tipo express.
Con esto ya tensmo nuestra aplicacion de express.
Ya podrémos empezar a definir nuestras rutas.
Normalmente trabajaríamos con una BBDD.

En este caso simularemos una base de datos con el archivo de cursos.js. y lo importaremos usando la sintaxis de desestructuracion para importar solo infoCursos del archivo cursos.js
*/

const { infoCursos } = require("./cursos.js"); //agregamos ./ a la ruta para decirle a node que este no es un modulo core de los principales de node. si no le ponemos ./ tratará de conseguir en uno de los módulos que ya viene instalado en node o uno de los que hemos instalado nosotros (por eso exress no tiene ./express)

console.log(infoCursos); // muestra los datos de los cursos
console.log(typeof infoCursos); // es un objeto

/*
ROUTING -- Implementacion de las rutas -- 
lo haremos a través de la app. objeto de express a través de su método .get();
app.MÉTODOhttp("ruta", funcion (req, res)=>{})

*/

app.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.end("Mi primer servidor con Express. Cursos 😊");
});

// Es decir, no hace falta usar condicionales para cada tipo de solicitud, en este caso implementamos esta para solicitudes get que vayan a la ruta principal /
// Hay que indicarle a traves de la app en que puerto va a escuchar.

const PUERTO = process.env.PORT || 3000;
app.listen(PUERTO, () => {
  // funcion que se llama cuando el servidor comience a escuchar
  console.log(`El servidor esta escuchando por el puerto ${PUERTO}`);
});

/* Cuando esté desarrollando la aplicacion yo puedo colocar un puerto específico, por ejemplo el 3000, pero cuando estes en un ambiente real, si ya estas publicando la aplicacion en un servicio de hosting, el puerto se te va a asignar a la aplicacion. Quizá sea uno que se me asigne de forma dinámica.
 En ese caso para tomar ese puerto de esas variables de ambiente que configura el servicio que estoy solicitando por tener mi aplicacion en vivo puedo usar;
 process.env.PORT || 3000  -- Esto va a conseguir el valor del puerto si está definido como una variable en el ambiente donde se esta ejecutando esa aplicacion de node, en caso contrario se asigna el pueto 3000
 Esto es importante porque si no la aplicacion no va a funcionar si la subo a un servicio en el que me proveen un puerto y yo tengo configurado otro
*/
