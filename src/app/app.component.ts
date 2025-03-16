import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Для маршрутизации
import { CommonModule } from '@angular/common'; // Для базовых Angular-директив, например, *ngIf, *ngFor
import { HeaderComponent } from './header/header.component'; // Ваш компонент HeaderComponent
import { FormsModule } from '@angular/forms';
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FormsModule,
    RouterOutlet,
    FooterComponent
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
