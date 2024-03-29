import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  //Desarrollo  
  //URL = 'http://localhost:8080/personas/';
  URL = 'https://portfolio-backend-mf.up.railway.app/personas/';


  constructor(private http: HttpClient) { }

  public getPersona(): Observable<Persona> {
    return this.http.get<Persona>(this.URL+'ver/1');
  }

  public update(id: number, persona: Persona): Observable<any> {
    return this.http.put<any>(this.URL+`editar/${id}`, persona);
  }

  public detail(id: number): Observable<Persona> {
    return this.http.get<Persona>(this.URL+`ver/${id}`);
  }

  public lista():Observable<Persona[]> {
    return this.http.get<Persona[]>(this.URL+'/ver');
  }
}
