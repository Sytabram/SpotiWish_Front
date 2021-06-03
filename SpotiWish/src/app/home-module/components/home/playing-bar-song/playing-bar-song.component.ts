import { Component, OnInit } from '@angular/core';
import {MatSliderChange} from "@angular/material/slider";

@Component({
  selector: 'app-playing-bar-song',
  templateUrl: './playing-bar-song.component.html',
  styleUrls: ['./playing-bar-song.component.css']
})
export class PlayingBarSongComponent implements OnInit {
  currentSong: any;
  paused: boolean = false;

  public audio = new Audio();
  constructor() { }

  ngOnInit(): void {
    this.currentSong = JSON.parse(localStorage.getItem("playingSong"))
    console.log(this.currentSong)

    this.audio.src = "https://localhost:5001/Music/" + this.currentSong.Id + "/song";
    this.audio.load();
    this.audio.play()
  }

  pauseSong() {
    this.audio.pause();
    this.paused = true
  }

  playSong(){
    this.audio.play()
    this.paused = false
  }

  onVolumeChange(event: any) {
    console.log("Current volume: ", event.value)
    this.audio.volume = event.value
  }

  onCurrentTimeChange(event: any) {
    console.log("Current time: ", event.value)
    this.audio.currentTime = event.value
  }

  setCurrentTime(){
    this.audio.currentTime = 10;
  }
}
