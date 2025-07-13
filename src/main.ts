import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app.module';
import 'jquery';
import 'popper.js';
import 'bootstrap';

platformBrowser().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true,
})
  .catch(err => console.error(err));
