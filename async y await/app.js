//simulamos una función de ordenación de producto, que normalmente sería asincrona
function ordenarProducto(producto) {
  return new Promise((resolve, reject) => {
    console.log(`Ordenando ${producto} de la tienda`); //1
    setTimeout(() => {
      if (producto == "taza") {
        resolve("Promesa cumplida exitosamente Se ha ordenando una taza");
      } else {
        reject("No hay disponibilidad del producto");
      }
    }, 2000); // para simular la asincronía metemos un retraso
  });
  // devolvemos promesa. Es comun devolver promesas cuando se quieren definir funciones asíncronas. Se crea la promesa dentro de la función y la retornas, así el programa puede esperar que la promesa se complete cuando se llama a la función
}

// //funcion para procesar pedido, que toma la respuesta de ordenar el producto como un argumento (aunque esto no es necesario, depende)

function procesarPedido(respuesta) {
  return new Promise((resolve, reject) => {
    console.log("procesando respuesta");
    console.log(`La respuesta fue "${respuesta}"`);
    setTimeout(() => {
      resolve("Gracias por tu compra"); // suponemos que en este caso teórico que el procesar el pedido siempre va a acabar de forma exitosa, no definimos la función rejecto
    }, 4000);
  });
}

// /*
// Al ser dos porcesos asíncronos sería posible que primero se procesase el pedido antes de ordenar el producto, cosa que no tendría sentido.
// En ese caso deberíamos asegurarnos de establecer el orden encadenando esas funciones asíncronas

// */
// ordenarProducto("taza")
//   .then((respuesta) => {
//     console.log(`Respuesta recibida, la respuesta fue ${respuesta}`); //2
//     return procesarPedido(respuesta);
//   })
//   .then((respuestaProcesada) => {
//     console.log(respuestaProcesada); //3
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//para garantizar que solo se vaya a llamar a la función procesarPedido cuando se haya resuelto CON EXITO la función ordenarProducto

/*primero se ejecuta el proces ordenarProducto que es asíncrono, cuando se complete, 
la llamada a then se va a ejecutar y se llamará a la función procesarPedido, 
que es otro porceso asíncrono, así que retornará otra promesa. Pero cuando se agrega return, 
lo que hacemos es retornar una promesa, lo que permite encadenar otro then, ya que lo anterior se convierte en una promesa, 
encadenando ambos then()

es decir, la llamada ordenarProducto, devuelve una promesa, y luego hacemos el otro then() para manejar esa nueva promesa devuelta
Es la forma de encadenar promesas

Por si la segunda promesa falla capturamos la posible respuesta desfavorable con un catch para tratarlo

RESULTADO MOSTRADO
Ordenando taza de la tienda //1 cuando función ordenar producto 
Respuesta recibida, la respuesta fue Ordenando una taza //2 aparece esto porque se completó con exito la rpomesa que teníamos de la llamada ordenarProducto
                      luego se llama a procesarPeido que retorna otra promesa. Cuando se completa ejecuta la 
procesando respuesta
La respuesta fue "Ordenando una taza"
Gracias por tu compra


*/

/*

ALTERNATIVA CON ASYNC AWAIT
permite escribir código asíncrono como si fuese síncrono

async dice a js que la función tiene codigo asícnrono por lo que siempre se devolverá una promesa.
await palabra clave que permite detener la ejecución de la función hasta que se complete el proceso asíncrono. await solo se puede usar
con funciones asyncronas con async


Recuerda, las funciones asíncronas retornan siempre una promesa, por lo que se puede llamar al método then y catch para manejar los exitos y los fracasos de las promesas.
*/

async function realizarPedido(producto) {
  try {
    const respuesta = await ordenarProducto(producto); // con la palabra await antes de los procesos asíncronos le indicamos al código que el proceso espere hasta que el proceso ordenarProducto se complete y la promesa se cumpla o rechace antes de continuar con la ejecución de la funcón.
    //Es decir, sabemos que la primera línea de la respuesta se va a completar antes de las siguientes
    console.log("Respuesta recibida");
    console.log(respuesta);
    const respuestaProcesada = await procesarPedido(respuesta);
    console.log(respuestaProcesada);
  } catch (error) {
    console.log(error); // este catch atrapa el error en caso de que se rechace la promesa de ordenarProducto en caso de que se llame a la función con un producto que no es el adecuado
  }
}

realizarPedido("taza");
