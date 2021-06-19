import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../services/login.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MustMatch} from "./helper/must-match.validator";
import {Router} from "@angular/router";

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

  name: any;
  cardNumber: any;
  dateExpire: any;
  CVC: any;

  submitted = false;

  subscribeForm: FormGroup;
  subscribeFormCreditCard: FormGroup;

  payment = false;

  constructor(private _loginService: LoginService, private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.subscribeForm = this.formBuilder.group({
      emailC: ['', [Validators.required, Validators.email]],
      usernameC: ['', [Validators.required, Validators.minLength(4)]],
      passwordC: ['', [Validators.required, Validators.minLength(6)]],
      passwordConfirmC: ['', [Validators.required]]
    }, {
      validator: MustMatch('passwordC', 'passwordConfirmC')
    });
    this.subscribeFormCreditCard = this.formBuilder.group({
      nameC: ['', [Validators.required]],
      cardNumberC: ['', [Validators.required]],
      dateExpireC: ['', [Validators.required]],
      CVCC: ['', [Validators.required]]
    });
  }

  subscribe() {
    this._loginService.newUser(this.email, this.username, this.passwordConfirm).subscribe(
      data => {
        if (data) {
          this.router.navigateByUrl('/login')
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

  get fCard(){
    return this.subscribeFormCreditCard.controls;
  }

  onSubmitCard() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.subscribeFormCreditCard.invalid) {
      return;
    }

    // display form values on success
    this.subscribe()
  }

  onSubmitInfo() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.subscribeForm.invalid) {
      return;
    }

    // display form values on success
    this.payment = true;
    this.submitted = false;
  }

  onReset() {
    this.submitted = false;
    this.subscribeForm.reset();
  }

  onResetCard() {
    this.submitted = false;
    this.subscribeFormCreditCard.reset();
    this.payment = false;
  }
}
