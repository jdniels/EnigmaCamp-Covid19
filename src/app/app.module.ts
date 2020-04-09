import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {NavigasiComponent} from './components/navigasi/navigasi.component';
import {HttpClientModule} from '@angular/common/http';
import {ProvinsiComponent} from './components/provinsi/provinsi.component';
import {AnimateModule} from './animate/animate.module';
import {CardComponent} from './components/reusable/card/card.component';
import {ChartsModule} from 'ng2-charts';
import { CardTableComponent } from './components/reusable/card-table/card-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigasiComponent,
    ProvinsiComponent,
    CardComponent,
    CardTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AnimateModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
