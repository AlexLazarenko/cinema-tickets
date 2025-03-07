import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import { MovieDataService } from '../service/movie.data.service';
import {Movie} from 'src/app/entity/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  standalone: true,
  imports: [
    RouterLink
  ],
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit{

  id: string="";
  image: string="";
  movie: Movie=new Movie("","","","","");

  constructor(private route: ActivatedRoute,
              private movieDataService: MovieDataService) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.movieDataService.sendGetRequest(this.id).subscribe((data: any)=>{
    this.movie=new Movie(data.id, data.nameOfMovie, data.movieDateTime, data.description,
    data.image)});
  }
}
