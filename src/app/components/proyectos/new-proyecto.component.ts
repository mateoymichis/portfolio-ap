import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
  nombre: string = '';
  descripcion: string = '';
  img: string = '';
  link1: string = '';
  link2: string = '';

  constructor(private proyectosService: ProyectosService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const skill = new Proyectos(this.nombre, this.descripcion, this.img, this.link1, this.link2);
    this.proyectosService.save(skill).subscribe(data => {
      alert("Proyecto añadido");
      this.router.navigate(['']);
    }, err => {
      alert("Falló");
      this.router.navigate(['']);
    })

  }

}
