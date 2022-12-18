

export interface Reserva {
    id?: number;
    id_sala: number;
    email_user: string;
    deporte: string;
    franja: string;
    fecha: Date;
    plazasLibres?: number;
    aforo?: number;
    iconUrl?: string;
}
