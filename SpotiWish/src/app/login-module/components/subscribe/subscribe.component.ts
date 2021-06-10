import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../services/login.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MustMatch} from "./helper/must-match.validator";

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {
  email: any;
  username: any;
  password: any;
  passwordConfirm: any;

  submitted = false;

  subscribeForm: FormGroup;

  constructor(private _loginService: LoginService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.subscribeForm = this.formBuilder.group({
      emailC: ['', [Validators.required, Validators.email]],
      usernameC: ['', [Validators.required, Validators.minLength(4)]],
      passwordC: ['', [Validators.required, Validators.minLength(6)]],
      passwordConfirmC: ['', [Validators.required]]
    }, {
      validator: MustMatch('passwordC', 'passwordConfirmC')
    })
  }

  subscribe() {
    this._loginService.newUser(this.email, this.username, this.passwordConfirm).subscribe(
      data => {
        if (data) {
          console.log(data)
        }
      },
      error => {
      }
    );
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.subscribeForm.controls;
  }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.subscribeForm.invalid) {
      return;
    }

    // display form values on success
    this.subscribe()
  }

  onReset() {
    this.submitted = false;
    this.subscribeForm.reset();
  }
}
