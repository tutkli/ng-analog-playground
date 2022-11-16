import {ChangeDetectionStrategy, Component} from '@angular/core';
import {defineRouteMeta} from '@analogjs/router';

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

    Welcome to the Analog application.
  `,
})
export default class HomePageComponent {}
