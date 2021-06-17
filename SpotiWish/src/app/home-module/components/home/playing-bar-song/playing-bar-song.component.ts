import {MatSliderChange} from "@angular/material/slider";
import {Track} from "ngx-audio-player";
import {Component, OnDestroy, OnInit} from "@angular/core";
import {MusicService} from "../../../services/music.service";

@Component({
  selector: 'app-playing-bar-song',
  templateUrl: './playing-bar-song.component.html',
  styleUrls: ['./playing-bar-song.component.css']
})
export class PlayingBarSongComponent implements OnInit, OnDestroy {
  public static id: any;
  paused: boolean = false;

  currentSong: any;

  public audio = new Audio();

  constructor(private _musicService: MusicService) { }

  ngOnInit(): void {
    this.getMusicById();
  }

  ngOnDestroy(): void {
    this.audio.pause();
    this.audio.currentTime = 0;
  }

  private getMusicById(){
    this._musicService.getMusicById(PlayingBarSongComponent.id).subscribe(
      data => {
        if (data) {
          this.currentSong = data;
          console.log("Music: ", data);
        }
        this.audio.src = "https://localhost:5001/Music/" + this.currentSong.id + "/song";
        this.audio.play();
      },
      error => { }
    );
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
}
