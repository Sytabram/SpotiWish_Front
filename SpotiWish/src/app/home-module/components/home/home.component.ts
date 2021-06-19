import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {HomeService} from "../../services/home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public href = ""
  public static playingSong: boolean = false;
  public static playingSongNotSubscribe: boolean = false;

  public static subscribed = false
  static playingSongForLogo: boolean = false;

  constructor(private router: Router, private _homeService: HomeService) {
  }

  ngOnInit(): void {
    if (localStorage.getItem("token")){
      HomeComponent.subscribed = true;
    }
  }

}
