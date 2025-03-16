import { Component } from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import { RouterLink } from "@angular/router";
import { CallDataService } from "../service/call.data.service";

@Component({
  selector: 'app-calculate', // Имя селектора для использования компонента в HTML
  templateUrl: './calculate.component.html',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink
  ],
  // Путь к HTML-шаблону
  styleUrls: ['./calculate.component.css'] // Путь к файлу со стилями
})
export class CalculateComponent {
  selectedLevel: string = ''; // Хранит выбранную опцию
  selectedMaterial: string = ''; // Хранит выбранную опцию
  selectedRooms: string = ''; // Хранит выбранную опцию
  selectedField: string = ''; // Хранит выбранную опцию
  selectedMoney: string = ''; // Хранит выбранную опцию
  selectedCredit: string = ''; // Хранит выбранную опцию
  userName: string = '';
  userPhone: string = '';


  constructor(private callDataService: CallDataService) {
  }

  collectData() {
      const formData = {
      level: this.selectedLevel,
      material: this.selectedMaterial,
      rooms: this.selectedRooms,
      field: this.selectedField,
      money: this.selectedMoney,
      credit: this.selectedCredit,
      name: this.userName,
      phone: this.userPhone,
    };

    this.callDataService.sendCalculateRequest(formData)
      .subscribe((data: any) => {
        console.log(data.value)
      })
  }
}
