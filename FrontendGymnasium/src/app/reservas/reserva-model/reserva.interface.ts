

export interface Reserva {
    id: number;
    email_user: string;
    fecha: Date;
    franja: string;
    id_pista: number;
    deporte?: string;
    iconUrl?: string;
}
