import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { TicketsComponent } from './tickets/tickets.component';

const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'movies', component: MoviesComponent },
  { path: 'movies/:id', component: MovieComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'tickets/:movieId/:nameOfMovie', component: TicketsComponent },
];

@NgModule({
 imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

