import {Component} from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import { LoginDataService } from '../service/login.data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [
    FormsModule
  ],
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor(private loginDataService: LoginDataService) { }

  onSubmit(form: NgForm) {
  this.loginDataService.sendLoginRequest(form.value).subscribe((data:any)=>{
  console.log(data)
  localStorage.setItem('token',data.token)
  })
  }
}
