import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-skeleton-loader',
  template: `
    <div class="loader" [ngStyle]="skeletonStyle()"></div>
  `,
  styleUrls: ['./skeleton-loader.component.scss']
})
export class SkeletonLoaderComponent {

  @Input() CHeight: number;
  @Input() CWidth: number;
  @Input() Circle: boolean;
  @Input() isLoading: boolean = true;
  
  skeletonStyle(){
    return {
      'width.px': this.CWidth ? this.CWidth : '',
      'heigth.px': this.CHeight ? this.CHeight : '',
      'border.radius': this.Circle ? '50%' : ''
    };
  }
}
