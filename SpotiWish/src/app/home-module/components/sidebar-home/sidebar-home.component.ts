import { Component, OnInit } from '@angular/core';
import {HomeComponent} from "../home/home.component";

@Component({
  selector: 'app-sidebar-home',
  templateUrl: './sidebar-home.component.html',
  styleUrls: ['./sidebar-home.component.css']
})
export class SidebarHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getPlayingSongStatus(){
    return HomeComponent.playingSong
  }

}
