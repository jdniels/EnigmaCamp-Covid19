import {Component, OnInit} from '@angular/core';
import {HomeService} from '../home.service';
import {Country, Global} from '../../api.model';
import {pipe} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // @ts-ignore
  dataPositif: Country;
  dataHealthy: Country;
  dataGlobal: Global[];
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.getDataPositif();
    this.getDataHealthy();
    this.getDataGlobal();
  }

  getDataPositif(){
    return this.homeService.getDataPositif().subscribe(
      response => this.dataPositif = response,
      error => console.log(error)
    );
  }
  getDataHealthy(){
    return this.homeService.getDataHealthy().subscribe(
      response => this.dataHealthy = response
    )
  }
  getDataGlobal(){
    return this.homeService.getDataGlobal().subscribe(
      response => this.dataGlobal = response
    )
  }
}
