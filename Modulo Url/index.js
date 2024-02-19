/*URL -- localizador uniforme de recursos
Permite indicar la web que queremos obtener
Punto de partida para poder pedirle información al servidor

Esturctura de url

https://www.freecodecamp.org/espagnol

https: -- protocolo conjunto de reglas a usar en la comunicación para acceder al recurso específico de la url

www. --- subdominio -- Información adicional agregada al inicio del dominio de una pagina web. Permite a los sitios web oranizar y separar la infor para distitnos propósitos

freecodecamp -- dominio - Referencia única a un sitio web en internet. Cuando adquirimos un dominio lo compramos, siendo los únicos dueños 

.org -- dominio de nivel superior (tb hay .com, .net. int edu gov ...) Llamado TLD -- Top Level Domain

/espagnol -- path -- Es el archivo o directorio en el servidor web, puede tener parámetros para personalizarlo. Estos parámetros son parte de la URL.
https://www.freecodecamp.org/ -- representa la raiz del sitio web, la pagina principal. Lo que agregamos después representa un camino dentro de ese conjunto de archivos y carpetas


Hay dos típos de parámetros ---

 -- Parámetros de ruta - personalizan url para acceder específicamente a los datos que queremos, en el siguiente ejemplo accederíamos a los datos del usuario 14

ejemplo --- https://www.ejemplo.org/usuarios/14
 

-- Parámetros query --
Parámetros de búsqueda, que no son parte de la url, Incorpora más elementos, que son los parámetros query o query string
Se usan para obtener contenido dinámico. Ejemplo - filtrar una lista de recursos. En el siguiente ejemplo se filtrarían de todos los recursos de google a solo los recursos que contienen esas palabras

Los parámetros query se separan de la parte principal de la URL con el símbolo ?
diferentes pares unidos por &

ejemplo --- https://www.google.com/search?q=cursos+de+node&sourceid=chrome&ie=UTF-8

?q=cursos+de+node&sourceid=chrome&ie=UTF-8 -- esto es el parámetro query formado por pares clave valor

q -- clave 
cursos+de+node -- valor

Estos parámetros query permiten filtrar la respuesta que le vamos a enviar al cliente, solo enviando lo que le interesa
Normalmente parámetros query usados para filtrar solicitudes GET, es decir para obtener recursos específicos

*/
/*
MODULO URL
módulo de Node para trabajar con urls, que permite muchas funciones, como por ejemplo extraer los diferentes componentes de la esturcutra de la url
*/

const miUrl = new URL(
  "https://www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1"
); //URL clase disponible globalmente gracias al módulo URL. Se le pasa por parámetro un string que corresponde con una url

// hostname - nombre del host
console.log(miUrl.hostname); //-- devuelve www.ejemplo.org

//  pathname - nombre del camino

console.log(miUrl.pathname); // devuelve cursos/programacion

//  searchParams -- devuelve objeto de tipo URLSearchParamscon los pares claves valor de los parámetros query

console.log(miUrl.searchParams); // URLSearchParams { 'ordenar' => 'vistas', 'nivel' => '1' }

console.log(typeof miUrl.searchParams); // devuelve objeto


//obtener parametros en concreto

console.log(miUrl.searchParams.get("nivel")); // devuelve 1
