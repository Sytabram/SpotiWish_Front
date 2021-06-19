import { Component, OnInit } from '@angular/core';
import {HomeComponent} from "../home/home.component";
import {Router} from "@angular/router";
import jwtDecode from "jwt-decode";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserService} from "../../services/user.service";
import {MatDialog} from "@angular/material/dialog";
import {DialogInfoUserComponent} from "./dialog-info-user/dialog-info-user.component";


@Component({
  selector: 'app-sidebar-home',
  templateUrl: './sidebar-home.component.html',
  styleUrls: ['./sidebar-home.component.css']
})
export class SidebarHomeComponent implements OnInit {

  tokenInfo: any;

  user: any;

  constructor(private router: Router, private _userService: UserService, public dialog: MatDialog) { }

  ngOnInit(): void {
    if (HomeComponent.subscribed){
      this.tokenInfo = this.getDecodedAccessToken(localStorage.getItem("token"));
      this.getUserInfo(this.tokenInfo.Id)
    }
  }

  getPlayingSongStatus(){
    return HomeComponent.playingSong
  }

  getPlayingSongStatusForLogo(){
    return HomeComponent.playingSongForLogo
  }

  logout() {
    localStorage.removeItem("token");
    HomeComponent.subscribed = false;
    HomeComponent.playingSongForLogo = false;
    HomeComponent.playingSong = false;
    this.router.navigateByUrl('/login');
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

  private getUserInfo(id) {
    this._userService.getUserById(id).subscribe(
      data => {
        if (data) {
          this.user = data;
        }
      },
      error => { }
    );
  }

  openDialogInfoUser() {
    const dialogRef = this.dialog.open(DialogInfoUserComponent, {
      width: '525px',
      data: this.tokenInfo
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  getPlayingSongNotSubscribeStatus() {
    return HomeComponent.playingSongNotSubscribe
  }

  leave() {
    HomeComponent.playingSongForLogo = false;
    HomeComponent.playingSongNotSubscribe = false;
    this.router.navigateByUrl('/login');
  }
}
