import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from "./footer/footer.component";
import { ConfidentialityComponent } from "./confidentiality/confidentiality.component";
import {CalculateComponent} from "./calculate/calculate.component";

const routes: Routes = [
  { path: '', redirectTo: '/houses', pathMatch: 'full' },
  { path: 'contacts', component: FooterComponent },
  { path: 'confidentiality', component: ConfidentialityComponent },
  { path: 'calculate', component: CalculateComponent },
  { path: 'houses', component: MoviesComponent },
  { path: 'houses/:id', component: MovieComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/houses' } // обработка 404
];

@Component({
  standalone: true,
  template: ``
})
export class AppRoutingModule {}
export { routes };

