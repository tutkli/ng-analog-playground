import {ChangeDetectionStrategy, Component} from '@angular/core';
import {defineRouteMeta} from '@analogjs/router';

export const routeMeta = defineRouteMeta({
  title: 'About Analog',
  canActivate: [() => true],
  providers: [],
});

@Component({
  selector: 'app-about',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h2>About Analog</h2>

    Analog is a meta-framework on top of Angular.
  `,
})
export default class AboutPageComponent {}

