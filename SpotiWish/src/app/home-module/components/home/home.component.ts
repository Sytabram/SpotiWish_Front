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

  constructor(private router: Router, private _homeService: HomeService) {
    // subscribe to router navigation
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd){
        this.href = this.router.url;
        console.log(this.href)
      }
    });
  }

  ngOnInit(): void {
  }

  getPlayingSongStatus(){
    return HomeComponent.playingSong
  }

}
