import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  //persona: Persona[] = [];
  persona: Persona = new Persona("","","","");
  constructor(public personaService: PersonaService, private tokenService: TokenService) { }

  isLogged = false; 

  ngOnInit(): void {
   this.cargarPersona();
    if(this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarPersona(): void {
    this.personaService.getPersona().subscribe(data => {this.persona = data} )
  }

}
