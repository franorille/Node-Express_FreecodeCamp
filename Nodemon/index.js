/*
NODEMON

Herramienta que reinicia la aplicación de Node.js cuando detecta algún cambio en los archivos
Permite no tener que reiniciar el servidor cada vez que hagamos un cambio.

Instalación con npm
npm install -g nodemon
-g para instalarlo globalmente para que este disponible donde se necesite.

Para ejecutar aplicaciones:
nodemon nombreApp


OJO POSIBLE PROBLEMA
si ejecutamos nodemon desde terminal powersell puede dar problema que impida cargar o ejecutar scripts pudiendo estar desabilitado en el sistema. Porque powersell no te permita ejecutar scripts directamente
En mi caso powersell si me permite ejecutarlo directamente, pero tenlo en cuenta.

Podemos probar a usar otra terminal, como el command prompt

*/

/*CREACION DE SERVIDOR BÁSICO PARA PROBAR NODEMON*/

const http= require('http');
const PUERTO=3000;
const servidor =http.createServer((req,res)=>{
    res.end("Hola mundo con Nodemon incluso cerrando el terminal habiendo");

});

servidor.listen(PUERTO,()=>{
console.log(`El servidor está escuchando por el puerto ${PUERTO}`);
});

/*Ya no necesitamos detener y volver a ejecutar el servidor, por cada uno de los cambios nodemon reinicio y actualizó la aplicacion
nodemon monitoriza esos cambios
Incluso la simple inclusión de un comentario actualiza con nodemon*/