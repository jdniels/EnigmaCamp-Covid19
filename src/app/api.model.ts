export interface Country {
  name: string;
  value: number
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
