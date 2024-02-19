const estatusPedido = () => {
  return (estatus = Math.random() < 0.5); // se define true o false de forma aleatoria para simular el éxito o el fracaso.
  // Es una simulación de aleatoriedd para el resultado de una promesa.   En la vida real el éxito o el proceso vendría dado de un proceso externo con el servidor
};

//Llamamos a la función varias veces para mostrar el estatus
// for (let i=0;i<10;i++){
//     estatusPedido();
// }

const miPedidoPizza = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (estatusPedido()) {
      resolve("Pedido exitoso, la pizza está en camino, es como si se hubiese cumplido la promesa");
    } else {
      reject("Te quedas con hambre, ha habido un problema con el pedido. Es como si se hubiese rechazado la promesa");
    }
  }, 3000);
});

//el resutlado de esta promesa será aleatorio

//SINTAXIS ALTERNATIVA A DEFINIDA DE FORMA SEPARADA



// const exito=(mensajeConfirmacion)=>{
//     console.log(mensajeConfirmacion); // parámetro pasado en funcion resolve (creada por mi, la podría haber llamado de otra manera)
// }

// const fracaso=(mensajeFracaso)=>{
//     console.log(mensajeFracaso); // parámetro pasado en funcion reject (creada por mi, la podría haber llamado de otra manera)
// }
// miPedidoPizza.then(exito,fracaso); // asociamos las funciones que manejan el exito o el fracaso del resultado de las promesas


//SINTAXIS ALTERNATIVA B Estas sentencias se pueden combinar en un solo bloque de código concatenando dos then. El primero para manejar el éxito de la promesa y el segundo para manejar el fracaso.
/*esta concatenacion de métodos se denomina method chaining, es crear una cadena de llamadas a métodos. Es posible porque then() devuelve una promesa*/

// miPedidoPizza
// .then((mensajeConfirmacion)=>{
//     console.log(mensajeConfirmacion);
// })
// .then(null,(mensajeFracaso)=>{
//     console.log(mensajeFracaso);
// })

//en la segunda concatenación de then, el primer parámetro lo pasamos como null, porque en ese caso no tendremos una funci´no que maneje el e´xito
// solo el fracaso


//SINTAXIS ALTERNATIVA C CON CATCH()

/*catch() es un método de promesa que solo maneja la promesa si es rechazada, por lo que then solo manejaría el éxito de la promesa y catch el fracaso*/

// miPedidoPizza
// .then((mensajeConfirmacion)=>{
//     console.log(mensajeConfirmacion);
// })
// .catch((mensajeFracaso)=>{
//     console.log(mensajeFracaso);
// })


//SINTAXIS ALTERANTIVA D que es lo mismo que el anterior pero definiendo las funcines por separado

const exito=(mensajeConfirmacion)=>{
    console.log(mensajeConfirmacion); // parámetro pasado en funcion resolve (creada por mi, la podría haber llamado de otra manera)
}

const fracaso=(mensajeFracaso)=>{
    console.log(mensajeFracaso); // parámetro pasado en funcion reject (creada por mi, la podría haber llamado de otra manera)
}

miPedidoPizza.then(exito).catch(fracaso);