import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-skeleton-loader',
  template: `
    <div class="loader " [ngStyle]="skeletonStyle()"></div>  `,
  styleUrls: ['./skeleton-loader.component.scss']
})
export class SkeletonLoaderComponent {

  @Input() CHeight: number;
  @Input() CWidth: number;
  @Input() CMargin: number;
  @Input() Circle: boolean;

  skeletonStyle() {
    return {
      'width.px': this.CWidth ? this.CWidth : '',
      'height.px': this.CHeight ? this.CHeight : '',
      'margin.px': this.CMargin ? this.CMargin : '',
      'border.radius': this.Circle ? '50%' : ''
    };
  }
}
