

export interface Clase {
    id: number;
    description: string;
    iconUrl: string;
    longDescription?: string;
    category?: string;
    lessonsCount?: number;
    typeClass?: string;
    instructor?: string;
    plazasMaximas?: number;
    duracion?: number;
    sala?: number;
}
