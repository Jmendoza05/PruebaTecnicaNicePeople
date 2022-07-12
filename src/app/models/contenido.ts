export class Contenido {
    _id?: string;
    titulo: string;
    descripcion: string;
    imagen: string;
    etiquetas: string;
    categoria: string;
    fechaDeAccesoLimite: Date;
    state?: string;

    constructor(titulo: string, descripcion: string, imagen: string,
        etiquetas: string, categoria: string, fechaDeAccesoLimite: Date, state: string) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.etiquetas = etiquetas;
        this.categoria = categoria;
        this.fechaDeAccesoLimite = fechaDeAccesoLimite;
        this.state = state;
    }
}