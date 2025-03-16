import { Component, OnInit } from '@angular/core';
import { MoviesDataService } from '../service/movies.data.service';
import { CallDialogComponent } from '../call-dialog/call-dialog.component';
import { Movie } from 'src/app/entity/movie';
import { MatDialog } from '@angular/material/dialog';
import {NgOptimizedImage} from "@angular/common";
import {RouterLink, Routes} from "@angular/router";
import {FooterComponent} from "../footer/footer.component";
import {ConfidentialityComponent} from "../confidentiality/confidentiality.component";
import {CalculateComponent} from "../calculate/calculate.component";
import {MovieComponent} from "../movie/movie.component";
import {RegistrationComponent} from "../registration/registration.component";
import {LoginComponent} from "../login/login.component";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  standalone: true,
  imports: [
    RouterLink,
    NgOptimizedImage
  ],
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent { //implements OnInit{
 // movies: Movie[]=[];

  constructor( //private moviesDataService: MoviesDataService,
              private dialog: MatDialog) { }

 /* ngOnInit() {
    this.moviesDataService.sendGetRequest().subscribe((data: any)=>{
                                                 console.log(data);
                                                 this.movies = data;
  })
}
  */

  openDialog(): void {
    this.dialog.open(CallDialogComponent);
  }
}

