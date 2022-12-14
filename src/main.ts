import './polyfills';
import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideFileRouter, routes } from '@analogjs/router';

if (import.meta.env.PROD) {
  enableProdMode();
}
console.log(routes)
bootstrapApplication(AppComponent, {
  providers: [provideFileRouter()]
}).catch((err) => console.error(err));
