import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SkeletonLoaderComponent} from './skeleton-loader/skeleton-loader.component';
import {SpinnerComponent} from './spinner/spinner.component';

@NgModule({
  declarations: [SkeletonLoaderComponent, SpinnerComponent],
  imports: [
    CommonModule
  ],
  exports:[
    SkeletonLoaderComponent,
    SpinnerComponent
  ]
})
export class AnimateModule { }
