import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-spinner',
  template: `
    <div class="spinner">
      <div class="double-bounce1"></div>
      <div class="double-bounce2"></div>
    </div>
  `,
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent{
  @Input() isLoading: boolean = true
}
