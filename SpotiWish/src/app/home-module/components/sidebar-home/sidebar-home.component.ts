import { Component, OnInit } from '@angular/core';
import {HomeComponent} from "../home/home.component";
import {Router} from "@angular/router";
import jwtDecode from "jwt-decode";


@Component({
  selector: 'app-sidebar-home',
  templateUrl: './sidebar-home.component.html',
  styleUrls: ['./sidebar-home.component.css']
})
export class SidebarHomeComponent implements OnInit {

  tokenInfo: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (HomeComponent.subscribed){
      this.tokenInfo = this.getDecodedAccessToken(localStorage.getItem("token"));
      console.log(this.tokenInfo)
    }
  }

  getPlayingSongStatus(){
    return HomeComponent.playingSong
  }

  logout() {
    localStorage.removeItem("token");
    HomeComponent.subscribed = false
    this.router.navigateByUrl('/login')
  }

  getIfSubscribed() {
    return HomeComponent.subscribed;
  }

  getDecodedAccessToken(token: string): any {
    try{
      return jwtDecode(token);
    }
    catch(Error){
      return null;
    }
  }
}
