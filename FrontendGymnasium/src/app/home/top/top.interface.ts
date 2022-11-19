export interface TopInterface {
    welcome:   string;
    favorites: Favorite[];
    summary:   Summary[];
}

export interface Favorite {
    id:     number;
    titulo: string;
}

export interface Summary {
    id:       number;
    titulo:   string;
    clase:    string;
    cantidad: string;
}
