import {Observable} from 'rxjs';

export interface GlobalData {
  name: string;
  value: number
}

export interface Country {
  name:string
  sembuh: number
  meninggal: number
  positif: number
}

export interface Provinsi {
  FID: number
  Kode_Provi: number
  Provinsi: string
  Kasus_Posi: number
  Kasus_Semb: number
  Kasus_Meni: number
}

export interface Global {
  OBJECTID: number
  Country_Region: string
  Last_Update: number
  Lat: number
  Long_: number
  Confirmed: number
  Deaths: number
  Recovered: number
  Active: number
}

export interface Pending<T> {
  data: Observable<T>
  status: Observable<Status>
}

export enum Status {
  LOADING = 'Loading....',
  ERROR = 'Error...',
}
