import {Component, OnInit} from '@angular/core';
import {HomeService} from '../home.service';
import {Country, Global, GlobalData} from '../../api.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dataPositif: GlobalData;
  dataHealthy: GlobalData;
  dataDeath: GlobalData;
  dataIndonesia: Country[];
  dataGlobal: Global[];
  showSpinner: boolean = false;

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
      this.showSpinner = true;
    });
  }

  getDataPositif() {
    return this.homeService.getDataPositif().subscribe(respone => {
      this.dataPositif = respone;
      this.showSpinner = true;
    });
  }

  getDataHealthy() {
    return this.homeService.getDataHealthy().subscribe(response => {
      this.dataHealthy = response;
      this.showSpinner = true;
    }, error => console.log(error));
  }

  getDataDeath() {
    return this.homeService.getDataDeath().subscribe(response => {
      this.dataDeath = response
      this.showSpinner = true;
    }, error => console.log(error));
  }

  getDataGlobal() {
    return this.homeService.getDataGlobal().subscribe(response => {
      this.dataGlobal = response;
    }, error => console.log(error));
  }
}
