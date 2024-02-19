//Declaración de objeto en javaScript
let objeto = {
    "propiedad1":"valor1",
    "propiedad2":"valor1",
    "subArray1":["subvalorArray1","subvalorArray2","subvalorArray3",],
    "subObjeto1":{
        "subpropiedad1":"subvalor1",
        "subpropiedad2":"subvalor2",
        "subpropiedad3":"subvalor3",
    }
}

console.log(objeto);
console.log(typeof objeto); //Devuelve Objeto


//Convertir objeto javaScript a formato JSON (String)
let objetoJson= JSON.stringify(objeto);
console.log(objetoJson);
console.log(typeof objetoJson); // Devuelve String


//Pasar de formato JSON (String) a un objeto de JavaScritp
let nuevoObjetoProvenienteJSON = JSON.parse(objetoJson);
console.log(nuevoObjetoProvenienteJSON);
console.log(typeof nuevoObjetoProvenienteJSON); // Devuelve Objeto