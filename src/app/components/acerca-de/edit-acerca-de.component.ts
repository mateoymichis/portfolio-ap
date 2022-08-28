import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AcercaDe } from 'src/app/model/acerca-de';
import { AcercaDeService } from 'src/app/service/acerca-de.service';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})
export class EditAcercaDeComponent implements OnInit {
  acercade: AcercaDe = null; 

  constructor(private acercaDeService: AcercaDeService, private activatedRoute: ActivatedRoute, private router: Router) { }
 
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.acercaDeService.detail(id).subscribe(
      data => {
        this.acercade = data;
      }, err => {
        alert("Error al modificar acerca de");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(){
    const id = this.activatedRoute.snapshot.params['id'];
    this.acercaDeService.update(id, this.acercade).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar persona");
        this.router.navigate(['']);
      }
    )
  }

}
