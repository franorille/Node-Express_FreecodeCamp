const EventEmitter = require("events");
// console.log(EventEmitter);
// console.log(typeof EventEmitter); // es una función

//DEFINICION DE UN EVENTO

const emisorProductos = new EventEmitter(); //nueva instancia de clase EventEmitter

//  Cuando ocurra el evento compra -- establecemos la función flecha que manejA el evento que se denomina EVENT HANDLER
//  son funciones que están a la escucha de que suceda un evento para que una vez sucedan, entren en ejecución
//  lo que sucederá cuando suceda el evento compra. esa función puede llevar parámetros.
//  En este caso defino un parámetro por defecto que me permite la posibilidad de incluirlo o no.
//  En caso de que en la llamada a la función no incluya el importe total, se tomará como valor 0


emisorProductos.on("compra", (total=0) => {
  console.log(`Se realizo una compra por ${total}`);
});

// EMITIMOS UN UN EVENTO con método obj_emisor.emit("nombre_evento")
// emite el evento compra y se incluyen los parámetros necesarios de la función que maneja ese evento, 
// definida con el método del objeto emisor .on("nombre_evento", funcion(parametros)).
// En este momento, el programa buscará una línea que indique cual es la función asociada al evento compra,
// que es la que asociamos con el método on("compra", funcion)

emisorProductos.emit("compra",500); 
//Manejar el evento