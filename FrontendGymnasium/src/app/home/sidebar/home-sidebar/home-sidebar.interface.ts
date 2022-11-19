export interface SidebarInterface {
    actividad:   Actividad;
    necesidades: Necesidades[];
}

export interface Actividad {
    hoy:  Ayer[];
    ayer: Ayer[];
}

export interface Ayer {
    id:       number;
    titulo:   string;
    cantidad: string;
    individual: boolean;
}

export interface Necesidades {
    entrada: string;
    url:     string;
}

