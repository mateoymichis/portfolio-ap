export class Educacion {
id?: number;
nombreEd: string;
descripcionEd: string;
fechaIEd: string;
fechaFEd: string;

constructor(nombreEd: string, descripcionEd: string, fechaIEd: string, fechaFEd: string) {
    this.nombreEd = nombreEd;
    this.descripcionEd = descripcionEd;
    this.fechaIEd = fechaIEd;
    this.fechaFEd = fechaFEd;
}
}
