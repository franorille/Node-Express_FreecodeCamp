/*Archivo de cursos que simulara una base de datos*/
let infoCursos = {
    'programacion':[
        {
            id:1,
            titulo:'Aprende Python',
            lenguaje:'python',
            visitas:15000,
            nivel:'basico'
        },
        {
            id:2,
            titulo:'Python intermedio',
            lenguaje:'python',
            visitas:13000,
            nivel:'intermedio'
        },
        {
            id:3,
            titulo:'Aprende JavaScript',
            lenguaje:'javascript',
            visitas:32500,
            nivel:'basico'
        }
    ],
    'matematicas':[
        {
            id:1,
            titulo:'Aprende Calculo',
            tema:'calculo',
            visitas:52000,
            nivel:'basico'
        },
        {
            id:2,
            titulo:'Aprende Algebra',
            tema:'algebra',
            visitas:130200,
            nivel:'intermedio'
        }
    ]
};

module.exports.infoCursos = infoCursos;
