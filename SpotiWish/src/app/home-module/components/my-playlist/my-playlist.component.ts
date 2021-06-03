import { Component, OnInit } from '@angular/core';
import {HomeComponent} from '../home/home.component';

@Component({
  selector: 'app-my-playlist',
  templateUrl: './my-playlist.component.html',
  styleUrls: ['./my-playlist.component.css']
})
export class MyPlaylistComponent implements OnInit {
  album: any

  constructor() { }

  ngOnInit(): void {
    this.album = JSON.parse(localStorage.getItem("album"))
    console.log(this.album)
  }

  playThisSong(song: any) {
    localStorage.removeItem("playingSong")
    let songStr = JSON.stringify(song);
    localStorage.setItem("playingSong", songStr);

    HomeComponent.playingSong = !HomeComponent.playingSong
  }

}
