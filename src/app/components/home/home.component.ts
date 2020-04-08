import {Component, OnInit} from '@angular/core';
import {HomeService} from '../home.service';
import {Country, Global, GlobalData} from '../../api.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // @ts-ignore
  dataPositif: GlobalData;
  dataHealthy: GlobalData;
  dataDeath: GlobalData;
  dataIndonesia: Country[];
  dataGlobal: Global[];
  isloading = true;
  dataPos: any[] = [];

  constructor(private homeService: HomeService) {
  }

  ngOnInit(): void {
    this.getDataPositif();
    this.getDataHealthy();
    this.getDataDeath();
    this.getDataGlobal();
    this.getDataIndonesia();
  }

  public chartDataSets: Array<any> = [
    {data: [135693, 205696, 70000]}
  ];

  public chartDataLabel: Array<any> = ['Positif', 'Sembuh', 'Meninggal'];
  public chartOptions: any = {
    responsive: true
  };

  getDataIndonesia() {
    return this.homeService.getDataIndonesia().subscribe(respone => {
      this.dataIndonesia = respone;
    });
  }

  getDataPositif() {
    this.isloading = true;
    return this.homeService.getDataPositif().subscribe(response => {
      this.dataPositif = response;
      this.isloading = false;
    }, error => console.log(error));
  }

  getDataHealthy() {
    this.isloading = true;
    return this.homeService.getDataHealthy().subscribe(response => {
      this.dataHealthy = response;
      this.isloading = false;
    }, error => console.log(error));
  }

  getDataDeath() {
    this.isloading = true;
    return this.homeService.getDataDeath().subscribe(response => {
      this.dataDeath = response;
      this.isloading = false;
    }, error => console.log(error));
  }

  getDataGlobal() {
    this.isloading = true;
    return this.homeService.getDataGlobal().subscribe(response => {
      this.dataGlobal = response;
      this.isloading = false;
    }, error => console.log(error));
  }
}
