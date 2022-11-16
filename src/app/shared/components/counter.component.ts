import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="card">
      <button type="button" (click)="increment()">Count {{ count }}</button>
    </div>
  `
})
export class CounterComponent {
  count = 0;

  increment() {
    this.count++;
  }
}
