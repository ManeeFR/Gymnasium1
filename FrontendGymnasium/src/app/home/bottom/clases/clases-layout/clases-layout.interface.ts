export interface Clases {
    individuales: claseIndividual[];
    grupales: claseGrupal[];
}

export interface claseIndividual {
    titulo: string;
    sala: number;
    duracion: number;
    fecha: string;
    plazas: number;
    plazasMax: number;
    instructor: string;
    icon: string;
}

export interface claseGrupal {
    titulo: string;
    sala: number;
    duracion: number;
    fecha: string;
    plazas: number;
    plazasMax: number;
    instructor: string;
    icon: string;
}
