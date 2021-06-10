import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../services/login.service";
import {MustMatch} from "../subscribe/helper/must-match.validator";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: any;
  password: any;

  submitted = false;

  loginForm: FormGroup;

  constructor(private _loginService: LoginService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      usernameC: ['', [Validators.required]],
      passwordC: ['', [Validators.required]],
    })
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  loginUser(){
    this._loginService.loginUser(this.username, this.password).subscribe(
      data => {
        if (data) {
          console.log(data)
          this.router.navigateByUrl('/home')
        }
      },
      error => {
      }
    );
  }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    // display form values on success
    this.loginUser()

  }

  onReset() {
    this.submitted = false;
    this.loginForm.reset();
  }
}
