import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Skills } from '../model/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  //Desarrollo  
  //skillsURL = 'http://localhost:8080/skills';
  skillsURL = 'https://portfolio-backend-mf.up.railway.app/skills';

  constructor(private httpClient: HttpClient) { }

  public lista():Observable<Skills[]> {
    return this.httpClient.get<Skills[]>(this.skillsURL+'/lista');
  }

  public detail(id: number): Observable<Skills> {
    return this.httpClient.get<Skills>(this.skillsURL+`/detail/${id}`);
  }

  public save(skill: Skills): Observable<any> {
    return this.httpClient.post<any>(this.skillsURL+'/create', skill );
  }

  public update(id: number, skill: Skills): Observable<any> {
    return this.httpClient.put<any>(this.skillsURL+`/update/${id}`, skill);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.skillsURL+`/delete/${id}`);
  }
}
