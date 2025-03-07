import { Component, OnInit } from '@angular/core';
import { MoviesDataService } from '../service/movies.data.service';
import { CallDialogComponent } from '../call-dialog/call-dialog.component';
import { Movie } from 'src/app/entity/movie';
import { MatDialog } from '@angular/material/dialog';
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit{
  movies: Movie[]=[];

  constructor(private moviesDataService: MoviesDataService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.moviesDataService.sendGetRequest().subscribe((data: any)=>{
                                                 console.log(data);
                                                 this.movies = data;
  })
}

  openDialog(): void {
    this.dialog.open(CallDialogComponent);
  }
}

