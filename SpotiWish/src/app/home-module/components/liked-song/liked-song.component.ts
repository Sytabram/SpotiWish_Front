import { Component, OnInit } from '@angular/core';
import {HomeComponent} from '../home/home.component';

@Component({
  selector: 'app-liked-song',
  templateUrl: './liked-song.component.html',
  styleUrls: ['./liked-song.component.css']
})
export class LikedSongComponent implements OnInit {
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
