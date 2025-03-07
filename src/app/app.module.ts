import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { TicketsComponent } from './tickets/tickets.component';
import { HeaderComponent } from "./header/header.component";
import { CallDialogComponent } from "./call-dialog/call-dialog.component";

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    MoviesComponent,
    CallDialogComponent,
    MovieComponent,
    RegistrationComponent,
    LoginComponent,
    TicketsComponent
  ],
  providers: [],
  bootstrap: [AppComponent,
    HeaderComponent]
})
export class AppModule { }
