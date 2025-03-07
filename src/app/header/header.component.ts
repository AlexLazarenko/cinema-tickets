import { Component } from '@angular/core';

@Component({
  selector: 'app-header', // Название тега компонента
  templateUrl: './header.component.html',
  standalone: true,
  // Путь к HTML-файлу компонента
  styleUrls: ['./header.component.css'] // Путь к файлу стилей компонента
})
export class HeaderComponent {
  // Здесь можно добавить свойства и методы для работы хедера
  title: string = 'Добро пожаловать!';

  constructor() {}

  // Например, метод для обработки кликов по кнопке
  onButtonClick(): void {
    console.log('Кнопка нажата!');
  }
}
