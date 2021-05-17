import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public href = ""
  public static playingSong: boolean = false;

  constructor(private router: Router,) {
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


  changePlayingSong(){
    HomeComponent.playingSong = !HomeComponent.playingSong
  }

  getPlayingSongStatus(){
    return HomeComponent.playingSong
  }

}
