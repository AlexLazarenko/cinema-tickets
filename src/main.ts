import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { routes } from './app/app-routing.module';
import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import {
  PreloadAllModules,
  provideRouter,
  withDebugTracing,
  withPreloading
}
  from '@angular/router';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withPreloading(PreloadAllModules), withDebugTracing()), //registering routes
    provideHttpClient()
  ]
}).catch((err) => console.error(err));
