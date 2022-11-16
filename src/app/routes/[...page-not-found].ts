import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLinkWithHref} from '@angular/router';
import {defineRouteMeta} from '@analogjs/router';

export const routeMeta = defineRouteMeta({
  title: 'Page Not Found',
  canActivate: [() => true],
  providers: [],
});

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLinkWithHref],
  template: `
    <h2>Page Not Found</h2>

    <a routerLink="/">Go Back Home</a>
  `,
})
export default class PageNotFoundComponent {}
