import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Observer, forkJoin} from 'rxjs';
import * as Model from '../api.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  BASE_URL = '/api/';

  constructor(private http: HttpClient) {
  }

  getDataIndonesia(): Observable<Model.Country[]> {
    return this.http.get<Model.Country[]>(this.BASE_URL + 'indonesia');
  }

  getDataPositif(): Observable<Model.GlobalData> {
    return this.http.get<Model.GlobalData>(this.BASE_URL + 'positif');
  }

  getDataHealthy(): Observable<Model.GlobalData> {
    return this.http.get<Model.GlobalData>(this.BASE_URL + 'sembuh');
  }

  getDataDeath(): Observable<Model.GlobalData> {
    return this.http.get<Model.GlobalData>(this.BASE_URL + 'meninggal');
  }

  getDataGlobal(): Observable<Model.Global[]> {
    return this.http.get<Model.Global[]>(this.BASE_URL);
  }

  getDataProvinsi(): Observable<Model.Provinsi> {
    return this.http.get<Model.Provinsi>(this.BASE_URL + '{$country}/{$provinsi}');
  }

  getGlobalCount(): Observable<Model.GlobalCountData> {
    return new Observable((observer: Observer<Model.GlobalCountData>) => {
      forkJoin([
        this.getDataPositif(),
        this.getDataHealthy(),
        this.getDataDeath(),
      ]).subscribe((results) => {
        const globalCount: Model.GlobalCountData = {
          positive: results[0],
          negative: results[1],
          death: results[2],
        };

        observer.next(globalCount);
      },
      (error) => console.error);
    });
  }
}
