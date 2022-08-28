import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AcercaDe } from '../model/acerca-de';

@Injectable({
  providedIn: 'root'
})
export class AcercaDeService {
  URL =  'http://localhost:8080/acercade';
  constructor(private httpClient: HttpClient) { }

  public getAcercaDe(): Observable<AcercaDe> {
    return this.httpClient.get<AcercaDe>(this.URL+'/detail/1');
  }
  public lista():Observable<AcercaDe[]> {
    return this.httpClient.get<AcercaDe[]>(this.URL+'/lista');
  }

  public detail(id: number): Observable<AcercaDe> {
    return this.httpClient.get<AcercaDe>(this.URL+`/detail/${id}`);
  }

  public save(acercade: AcercaDe): Observable<any> {
    return this.httpClient.post<any>(this.URL+'/create', acercade );
  }

  public update(id: number, acercade: AcercaDe): Observable<any> {
    return this.httpClient.put<any>(this.URL+`/update/${id}`, acercade);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL+`/delete/${id}`);
  }

}
