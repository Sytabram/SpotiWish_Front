import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playing-bar-song',
  templateUrl: './playing-bar-song.component.html',
  styleUrls: ['./playing-bar-song.component.css']
})
export class PlayingBarSongComponent implements OnInit {
  currentSong: any

  constructor() { }

  ngOnInit(): void {
    this.currentSong = JSON.parse(localStorage.getItem("playingSong"))
    console.log(this.currentSong)
  }

}
