// import { Clase } from './app/clases/model/clase.interface';


export const COURSES: any = [

    undefined,

    {
        id: 1,
        description: "CrossFit",
        iconUrl: "assets/img/crossFit.jpeg",
        longDescription: "Sistema de entrenamiento basado en la ejecución de ejercicios funcionales de alta intensidad que varían constantemente. Se trata de una actividad muy completa, puesto que se trabajan: la fuerza, la agilidad, la potencia, la resistencia muscular, la coordinación, el equilibrio, la flexibilidad, la precisión, la velocidad y la resistencia cardiovascular y respiratoria.",
        category: 'BEGINNER',
        lessonsCount: 10
    },

    undefined,

    {
        id: 2,
        description: "GAP",
        iconUrl: "assets/img/GAP.jpeg",
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
        iconUrl: "assets/img/HIIT.jpeg",
        category: 'ADVANCED'
    },
    
    {
        id: 4,
        description: "Clase para mayores",
        iconUrl: "assets/img/claseMayores.jpeg",
        longDescription: "Clase diseñada para la 3º edad en la que se trabaja, en función de los días, la resistencia, la fuerza, el ritmo y la flexibilidad.",
        category: 'BEGINNER',
        lessonsCount: 10
    },

    {
        id: 5,
        description: 'Pilates',
        longDescription: "Método que incorpora un conjunto de ejercicios cuya finalidad es la de ejercitar el cuerpo y la mente, coordinando la realización de los mismos con la respiración.",
        iconUrl: "assets/img/pilates.jpg",
        category: 'ADVANCED',
        lessonsCount: 11
    },

    {
        id: 6,
        description: 'Club de corredores',
        longDescription: "Entrenamiento de la resistencia y de la técnica de la carrera.",
        iconUrl: "assets/img/clubCorredores.jpeg",
        category: 'ADVANCED',
        lessonsCount: 8
    },

    {
        id: 7,
        description: 'Zumba',
        longDescription: "Sesión de baile divertida y energética que combina distintos ritmos latinos de alta y baja intensidad.",
        iconUrl: "assets/img/zumba.jpeg",
        category: 'ADVANCED'
    },
 
    {
        id: 8,
        description: 'Body Combat',
        longDescription: "Programa de entrenamiento cardiovascular inspirado en las Artes Marciales, con el que liberarás grandes dosis de adrenalina y descubrirás tu fuerza interior.",
        iconUrl: "assets/img/bodyCombat.jpg",
        category: 'BEGINNER'
    },

    {
        id: 9,
        description: 'Body Pump',
        longDescription: "Clase original con barra y discos que fortalece y tonifica todo el cuerpo. Trabajarás los principales grupos musculares utilizando los mejores ejercicios de la sala de fitness.",
        iconUrl: "assets/img/bodyPump.jpeg",
        category: 'BEGINNER'
    },

    {
        id: 10,
        description: "Body balance",
        iconUrl: "assets/img/bodyBalance.jpeg",
        longDescription: "Programa de entrenamiento inspirado en el Yoga, el Tai Chi y el Pilates, que mejora la flexibilidad y la fuerza.",
        category: 'ADVANCED'
    }

];


export function findCourseById(courseId: number) {
// export function findCourseById(courseId: number): Clase {

    return COURSES.filter((x: undefined) => {
        return x !== undefined;
    }).find((course: { id: number; }) => course.id == courseId);
    
}
