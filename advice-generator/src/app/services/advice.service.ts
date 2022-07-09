import { Constantes } from './../shared/Constantes';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdviceService {

  constructor(private http: HttpClient) { }


  getAdviceRandom(): Observable<any>{
    return this.http.get<any>(Constantes.API_URL_BASE).pipe(
      take(1)
    )
  }

}
