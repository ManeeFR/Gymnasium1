// import { Clase } from './app/clases/model/clase.interface';


export const CLASES: any = [

    undefined,

    {
        id: 1,
        description: "CrossFit",
        imagen: "assets/img/CrossFit.png",
        longDescription: "Sistema de entrenamiento basado en la ejecución de ejercicios funcionales de alta intensidad que varían constantemente. Se trata de una actividad muy completa, puesto que se trabajan: la fuerza, la agilidad, la potencia, la resistencia muscular, la coordinación, el equilibrio, la flexibilidad, la precisión, la velocidad y la resistencia cardiovascular y respiratoria.",
        category: 'BEGINNER',
        lessonsCount: 10
    },

    undefined,

    {
        id: 2,
        description: "GAP",
        imagen: "assets/img/GAP.png",
        longDescription: "Clase de tonificación focalizada en 3 zonas principales de nuestro cuerpo: Glúteos, Abdominales y Piernas.",
        category: 'BEGINNER',
        lessonsCount: 10
    },

    undefined,

    undefined,

    undefined,

    {
        id: 3,
        description: 'HIIT',
        longDescription: "Entrenamiento cardiovascular de alta intensidad en el que se trabaja, principalmente, la resistencia a través de la autocarga y la pliometría.",
        imagen: "assets/img/HIIT.jpeg",
        category: 'ADVANCED'
    },

    {
        id: 4,
        description: "Clase para mayores",
        imagen: "assets/img/claseMayores.jpeg",
        longDescription: "Clase diseñada para la 3º edad en la que se trabaja, en función de los días, la resistencia, la fuerza, el ritmo y la flexibilidad.",
        category: 'BEGINNER',
        lessonsCount: 10
    },

    {
        id: 5,
        description: 'Pilates',
        longDescription: "Método que incorpora un conjunto de ejercicios cuya finalidad es la de ejercitar el cuerpo y la mente, coordinando la realización de los mismos con la respiración.",
        imagen: "assets/img/Pilates.png",
        category: 'ADVANCED',
        lessonsCount: 11
    },

    {
        id: 6,
        description: 'Club de corredores',
        longDescription: "Entrenamiento de la resistencia y de la técnica de la carrera.",
        imagen: "assets/img/clubCorredores.jpeg",
        category: 'ADVANCED',
        lessonsCount: 8
    },

    {
        id: 7,
        description: 'Zumba',
        longDescription: "Sesión de baile divertida y energética que combina distintos ritmos latinos de alta y baja intensidad.",
        imagen: "assets/img/Zumba.png",
        category: 'ADVANCED'
    },

    {
        id: 8,
        description: 'Body Combat',
        longDescription: "Programa de entrenamiento cardiovascular inspirado en las Artes Marciales, con el que liberarás grandes dosis de adrenalina y descubrirás tu fuerza interior.",
        imagen: "assets/img/BodyCombat.png",
        category: 'BEGINNER'
    },

    {
        id: 9,
        description: 'Body Pump',
        longDescription: "Clase original con barra y discos que fortalece y tonifica todo el cuerpo. Trabajarás los principales grupos musculares utilizando los mejores ejercicios de la sala de fitness.",
        imagen: "assets/img/bodyPump.jpeg",
        category: 'BEGINNER'
    },

    {
        id: 10,
        description: "Body balance",
        imagen: "assets/img/bodyBalance.jpeg",
        longDescription: "Programa de entrenamiento inspirado en el Yoga, el Tai Chi y el Pilates, que mejora la flexibilidad y la fuerza.",
        category: 'ADVANCED'
    }

];



export const CENTROS: any = [

    {
        id: 1,
        poblacion: "Utrera",
        provincia: "Sevilla",
        metrosCuadrados: 130,
        nombre: "Hispano Fitness",
        mensualidad: 25,
        imagen: "../../../../../assets/img/Boxeo.png"
    },    {
        id: 2,
        poblacion: "Utrera",
        provincia: "Sevilla",
        metrosCuadrados: 130,
        nombre: "Hispano Fitness",
        mensualidad: 25,
        imagen: "../../../../../assets/img/Boxeo.png"
    },    {
        id: 3,
        poblacion: "Utrera",
        provincia: "Sevilla",
        metrosCuadrados: 130,
        nombre: "Hispano Fitness",
        mensualidad: 25,
        imagen: "../../../../../assets/img/Boxeo.png"
    },    {
        id: 4,
        poblacion: "Utrera",
        provincia: "Sevilla",
        metrosCuadrados: 130,
        nombre: "Hispano Fitness",
        mensualidad: 25,
        imagen: "../../../../../assets/img/Boxeo.png"
    },    {
        id: 5,
        poblacion: "Utrera",
        provincia: "Sevilla",
        metrosCuadrados: 130,
        nombre: "Hispano Fitness",
        mensualidad: 25,
        imagen: "../../../../../assets/img/Boxeo.png"
    },    {
        id: 6,
        poblacion: "Utrera",
        provincia: "Sevilla",
        metrosCuadrados: 130,
        nombre: "Hispano Fitness",
        mensualidad: 25,
        imagen: "../../../../../assets/img/Boxeo.png"
    },    {
        id: 7,
        poblacion: "Utrera",
        provincia: "Sevilla",
        metrosCuadrados: 130,
        nombre: "Hispano Fitness",
        mensualidad: 25,
        imagen: "../../../../../assets/img/Boxeo.png"
    },    {
        id: 8,
        poblacion: "Utrera",
        provincia: "Sevilla",
        metrosCuadrados: 130,
        nombre: "Hispano Fitness",
        mensualidad: 25,
        imagen: "../../../../../assets/img/Boxeo.png"
    },    {
        id: 9,
        poblacion: "Utrera",
        provincia: "Sevilla",
        metrosCuadrados: 130,
        nombre: "Hispano Fitness",
        mensualidad: 25,
        imagen: "../../../../../assets/img/Boxeo.png"
    },    {
        id: 10,
        poblacion: "Utrera",
        provincia: "Sevilla",
        metrosCuadrados: 130,
        nombre: "Hispano Fitness",
        mensualidad: 25,
        imagen: "../../../../../assets/img/Boxeo.png"
    }

];


export function findClaseById(claseId: number) {

    return CLASES.filter((x: undefined) => {
        return x !== undefined;
    }).find((clase: { id: number; }) => clase.id == claseId);

}


export function findCentroById(centroId: number) {

    return CENTROS.filter((x: undefined) => {
        return x !== undefined;
    }).find((centro: { id: number; }) => centro.id == centroId);

}
