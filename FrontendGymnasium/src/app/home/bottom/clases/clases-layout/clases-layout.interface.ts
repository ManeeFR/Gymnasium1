export interface Clases {
    individuales:  claseIndividual[];
    grupales: claseGrupal[];
}

export interface claseIndividual {
    titulo:       string;
    codigo:       string;
    duracion:     string;
    plazas:       number;
    plazasLibres: number;
    instructor:   string;
}

export interface claseGrupal {
    titular:  string;
    codigo:   number;
    dinero:   number;
    objetivo: number;
}
