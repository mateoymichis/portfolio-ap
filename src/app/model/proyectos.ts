export class Proyectos {
    id?: number;
    nombre: string;
    descripcion: string;
    img: string;
    link1: string;
    link2: string;

    constructor(nombre: string, descripcion: string, img: string, link1: string, link2: string) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.img = img;
        this.link1 = link1;
        this.link2 = link2;
    }
}
