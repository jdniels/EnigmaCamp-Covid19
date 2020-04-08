import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="rounded overflow-hidden shadow-lg text-center bg-{{backGround}}-200 w-full md:w1/3 p-4 mx-2">
      <p>{{name}}</p>
      <p>{{value}}</p>
    </div>
  `
})
export class CardComponent {
  @Input() name: string;
  @Input() value: number;
  @Input() backGround: string;
  isLoading: boolean = false
}
