import { Component } from '@angular/core';
import { FormsModule, NgForm, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from "@angular/forms";
import { CallDataService } from "../service/call.data.service";
import { NgIf } from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
    selector: 'app-call-dialog',
    templateUrl: './call-dialog.component.html',
    standalone: true,
  imports: [
    FormsModule,
    NgIf,
    ReactiveFormsModule,
    RouterLink
  ],
    styleUrls: ['./call-dialog.component.css']
})
export class CallDialogComponent {
  myForm: FormGroup;
  constructor(private callDataService: CallDataService, private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
    });
  }

  submitForm(form: NgForm): void {
    if (form.valid) {
      this.callDataService.sendCallRequest(form.value)
        .subscribe((data: any) => {
          console.log(data.value)
        })
    }
  }
}

