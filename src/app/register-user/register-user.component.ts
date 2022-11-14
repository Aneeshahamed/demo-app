import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  RegForm = new FormGroup({
    Email: new FormControl('',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    Password: new FormControl('',[
      Validators.required,
      Validators.minLength(8)
    ]),
    Cfm_Pwd: new FormControl('',[
      Validators.required,
      Validators.pattern(
        /([a-zA-Z0-9][!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]){8,}/)
    ])
    });

    SignUp(){
      
    }
}
