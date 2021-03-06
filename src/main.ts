import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppModule } from './app/';
if (environment.production) {
  enableProdMode();
}
let boot = platformBrowserDynamic().bootstrapModule(AppModule);
