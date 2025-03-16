import { Component } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-header', // Название тега компонента
  templateUrl: './header.component.html', // Путь к HTML-файлу компонента
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink
  ],
  styleUrls: ['./header.component.css'] // Путь к файлу стилей компонента
})
export class HeaderComponent {
}
