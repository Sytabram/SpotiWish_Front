import { SubscribeComponent } from './components/subscribe/subscribe.component';
import {LoginComponent} from "./components/login/login.component";
import {LoginRoutingModule} from "./login-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";



@NgModule({
  declarations: [
    SubscribeComponent, LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
