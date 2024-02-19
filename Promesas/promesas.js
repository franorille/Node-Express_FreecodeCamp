/* Promesa. Objeto que representa el eventual resultado o error de una operación asíncrona. 
 Solo se sabrá el resultado cuando se resuelva. No sabemos cuanto tiempo tarda en resolverse
La promesa pasa por una serie de estados:
1º Pending 
2º Fulfilled (cumplida ) || rejected (rechazada)
Las promesas son objetos de js, que representan ese resultado o error que puede ocurrir al cumplirse o rechazarse esa promesa
Estos objetos promesas se asocian a una función cancelIdleCallback, que son funciones que se ejecutan cuando se completa el proceso asincrono para completar el resultado
Es decir son funciones de respuesta.
Son funciones que se pasa a otra función como argumento y luego se ejecuta dentro de la función externa.

Una representación gráfica sería dos funciones f y h
la función f se pasa como argumento a la función h y luego llamamos a f dentro de la función h cuando se complete el proceso asíncrono. 


METODO .then()

Decide que ocurre cuando se completa la promesa ya sea de forma exitosa o con un error.
Toma dos funciónes flecha, el orden debe ser, la primera para manejar la resputesta favorable y la segunda para manejar el rechazo,
 estas funciónes manejarPromesaCumplida y manejarPromesaRechazada toman como parámetro un valorm 
 que será el que pasamos como parámetro en la función resolve ("Promesa cumplida") o reject
Ese argumento valor es como una conexión que estamos creando
Es decir si la promesa se resuelve exitosamente, estamos pasando un valor a la funci´n que la va a manejar
Y si se resuelve con error lo mismo.

Es decir, el metodo then asocia las funciones que van a manejar el exito o el fracaso del resultado de una promesa
*/

const promesaCumplida = false; // solo para fines pedagógicos

const miPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (promesaCumplida) {
      resolve("Promesa cumplida!!");
    } else {
      reject("Promesa rechazada");
    }
  }, 3000);
});



const manejarPromesaCumplida=(valor)=>{
  console.log("Esta es la funcion definida para manejar la respuesta favorable")
  console.log(valor)
  
};
const manejarPromesaRechazada=(razonRechazo)=>{
  console.log(razonRechazo)
  console.log("Esta es la funcion definida para manejar el rechazo")
};

miPromesa.then(manejarPromesaCumplida,manejarPromesaRechazada);

/*

Creamos una nueva promesa, la asiganmos a la constante miPromesa
Esa miPromesa toma una fucnión que recive dos parametros que son funciones resolve y reject se asignan automáticamente. 
Son funciones que permiten decidir si la promesa fue exitosa o ocurrio un error fue rechazada

Introducimos un retraso de 3000 milisegundos con el módulo setTimeout() con fines didacticos que simulará un evento asíncrono que ejecutará una función trascurridos esos tres segundos.
toma una condición para determinar el resutlado de la promesa, si la constante promesaCumplida es true, la promesa se resuelve exitosamente con resolve()
en caso contrario se rechaza la promesa con reject()

METODO THEN() --



*/
