import { Component } from '@angular/core';

@Component({
  selector: 'app-call-dialog',
  templateUrl: './call-dialog.component.html',
  standalone: true,
  styleUrls: ['./call-dialog.component.css']
})
export class CallDialogComponent {
  submitForm(): void {
    // Здесь вы можете обработать данные и отправить их на сервер
    console.log('Форма отправлена!');
  }
}

