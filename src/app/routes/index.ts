import {ChangeDetectionStrategy, Component} from '@angular/core';
import {defineRouteMeta} from '@analogjs/router';
import {CounterComponent} from '../shared/components/counter.component';

export const routeMeta = defineRouteMeta({
  title: 'Analog Home',
  canActivate: [() => true],
  providers: [],
});

@Component({
  selector: 'app-home',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h2>Analog Home</h2>

    <p>Welcome to Analog.</p>

    <app-counter></app-counter>
  `,
  imports: [
    CounterComponent
  ]
})
export default class HomePageComponent {}
