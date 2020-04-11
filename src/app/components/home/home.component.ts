import {Component, OnInit} from '@angular/core';
import {HomeService} from '../home.service';
import {Country, Global, GlobalData, GlobalCountData} from '../../api.model';
import {catchError, map} from 'rxjs/operators';
import {error} from '@angular/compiler/src/util';

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
  isLoading = true;

  public chartDataSets: Array<any> = [
    {data: [135693, 205696, 70000]}
  ];

  public chartDataLabel: Array<any> = ['Positif', 'Sembuh', 'Meninggal'];
  public chartOptions: any = {
    responsive: true
  };

  constructor(private homeService: HomeService) {
  }

  ngOnInit(): void {
    this.homeService.getGlobalCount()
      .subscribe((globalData: GlobalCountData) => {
        const { positive, negative, death } = globalData;
        this.dataPositif = positive;
        this.dataHealthy = negative;
        this.dataDeath = death;
        this.chartDataSets = [
          {
            data: [
              Number(positive.value.replace(/[^0-9\.-]+/g, '')),
              Number(negative.value.replace(/[^0-9\.-]+/g, '')),
              Number(death.value.replace(/[^0-9\.-]+/g, '')),
            ],
          },
        ];

        this.isLoading = false;
      });

    // this.getDataPositif();
    // this.getDataHealthy();
    // this.getDataDeath();
    // this.getDataGlobal();
    // this.getDataIndonesia();
  }

  getDataIndonesia() {
    return this.homeService.getDataIndonesia().subscribe(respone => {
      this.dataIndonesia = respone;
      this.isLoading = true;
    });
  }

  getDataPositif() {
    return this.homeService.getDataPositif().subscribe((response: any) => {
      this.dataPositif = {...response};
      this.isLoading = true;
    }, error => {
      alert('Error')
    })
  }


  getDataHealthy() {
    return this.homeService.getDataHealthy().subscribe(response => {
      this.dataHealthy = response;
      this.isLoading = true;
    }, error => console.log(error));
  }

  getDataDeath() {
    return this.homeService.getDataDeath().subscribe(response => {
      this.dataDeath = response
      this.isLoading = true;
    }, error => console.log(error));
  }

  getDataGlobal() {
    return this.homeService.getDataGlobal().subscribe(response => {
      this.dataGlobal = response;
    }, error => console.log(error));
  }
}
