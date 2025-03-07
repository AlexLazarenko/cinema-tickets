import {Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TicketsDataService } from '../service/tickets.data.service';
import {Ticket} from 'src/app/entity/ticket';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit{
  id: string="";
  movieName: string="";
  tickets: Ticket[]=[];

  constructor(private route: ActivatedRoute,
  private ticketsDataService: TicketsDataService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['movieId'];
    this.movieName = this.route.snapshot.params['nameOfMovie'];
    this.ticketsDataService.sendGetRequest(this.id).subscribe((data: any)=>{
                                                 console.log(data);
                                                 this.tickets = data;
  })
}

  onSubmit(ticket: Ticket) {
    console.log(JSON.stringify(ticket));
    this.ticketsDataService.sendBuyTicketRequest(JSON.stringify(ticket))
    .subscribe((data: any)=>{
                console.log(data);
                });
  }
}

