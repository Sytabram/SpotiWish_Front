import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginModule} from './login-module/login.module';
import {HomeModule} from './home-module/home.module';
import {AdminModule} from './admin-module/admin.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {IoPlayerModule} from "io-player";
import {HttpClientModule} from "@angular/common/http";
import {NgxAudioPlayerModule} from "ngx-audio-player";
import {NgModule} from "@angular/core";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AdminModule,
    LoginModule,
    HomeModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxAudioPlayerModule,
    IoPlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
