export class Persona {
    id?: number;
    nombre: String;
    apellido: String;
    profesion: String;
    img: String;

    constructor (nombre: String, apellido: String, profesion: String, img: String) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.profesion = profesion;
        this.img = img;
    }
}