import {MatSliderChange} from "@angular/material/slider";
import {Track} from "ngx-audio-player";
import {Component, EventEmitter, OnDestroy, OnInit, Output} from "@angular/core";
import {MusicService} from "../../../services/music.service";
import {HomeComponent} from "../home.component";

@Component({
  selector: 'app-playing-bar-song',
  templateUrl: './playing-bar-song.component.html',
  styleUrls: ['./playing-bar-song.component.css']
})
export class PlayingBarSongComponent implements OnInit, OnDestroy {
  public static id: any;
  paused: boolean = false;
  time: number = 0;

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
        }
        this.audio.src = "https://localhost:5001/Music/" + this.currentSong.id + "/song";
        this.audio.load();
        this.audio.play();
        HomeComponent.playingSongForLogo = true
        this.audio.addEventListener("timeupdate", () => {
          this.time = this.audio.currentTime;
        })
      },
      error => { }
    );
  }

  pauseSong() {
    this.audio.pause();
    HomeComponent.playingSongForLogo = !HomeComponent.playingSongForLogo;
    this.paused = true
  }

  playSong(){
    this.audio.play()
    HomeComponent.playingSongForLogo = !HomeComponent.playingSongForLogo;
    this.paused = false
  }

  onVolumeChange(event: any) {
    this.audio.volume = event.value
  }

  onCurrentTimeChange(event: any) {
  /*  console.log("Current time: ", event.value)
    this.audio.pause();
    this.audio.currentTime = 50;
    this.audio.play();*/
  }
}
