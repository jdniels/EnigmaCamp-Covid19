import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Observer} from 'rxjs';
import * as Model from '../api.model'
import Global = WebAssembly.Global;
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  // tslint:disable-next-line:variable-name
  BASE_URL = '/api/';
  constructor(private http: HttpClient) { }

  getDataPositif(): Observable<Model.Country> {
    return this.http.get<Model.Country>(this.BASE_URL + 'positif');
  }
  getDataHealthy(): Observable<Model.Country>{
      return this.http.get<Model.Country>(this.BASE_URL + 'sembuh')
  }
  getDataGlobal(): Observable<Model.Global[]>{
    return this.http.get<Model.Global[]>(this.BASE_URL)
  }
  getDataProvinsi(): Observable<Model.Provinsi>{
    return this.http.get<Model.Provinsi>(this.BASE_URL + '{$country}/{$provinsi}')
  }
}
