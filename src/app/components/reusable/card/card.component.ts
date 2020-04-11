import {Component, Input} from '@angular/core';
import { GlobalData } from 'src/app/api.model';

@Component({
  selector: 'app-card',
  template: `
  <div class="rounded overflow-hidden shadow-lg p-4 mx-2 bg-{{background}}-200">
    <div *ngIf="!isLoading && data; else loading">
      <p class="text-center">{{ data.name }}</p>
      <p class="text-center">{{ data.value }}</p>
    </div>
    <ng-template #loading>
      <app-spinner></app-spinner>
    </ng-template>
  </div>
  `
})
export class CardComponent {
  @Input() data: GlobalData;
  @Input() background: string;
  @Input() isLoading = true;
}
