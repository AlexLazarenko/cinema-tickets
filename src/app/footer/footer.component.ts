import { Component } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-footer', // Имя селектора для использования компонента в HTML
  templateUrl: './footer.component.html',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink
  ],
  // Путь к HTML-шаблону
  styleUrls: ['./footer.component.css'] // Путь к файлу со стилями
})
export class FooterComponent {
}

