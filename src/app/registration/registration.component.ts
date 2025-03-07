import {Component} from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import { RegistrationDataService } from '../service/registration.data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  standalone: true,
  imports: [
    FormsModule
  ],
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  constructor(private registrationDataService: RegistrationDataService) { }

 onSubmit(form: NgForm) {
  this.registrationDataService.sendRegistrationRequest(form.value)
  .subscribe((data:any)=>{
   console.log(data.value)
    })
  }
}
