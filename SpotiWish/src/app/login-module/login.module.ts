import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import {LoginComponent} from "./components/login/login.component";
import {LoginRoutingModule} from "./login-routing.module";



@NgModule({
  declarations: [
    SubscribeComponent, LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
