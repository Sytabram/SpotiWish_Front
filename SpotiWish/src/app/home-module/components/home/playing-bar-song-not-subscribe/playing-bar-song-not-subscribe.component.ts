import {Component, OnInit} from '@angular/core';
import {MusicService} from "../../../services/music.service";
import {HomeComponent} from "../home.component";
import {PlayingBarSongComponent} from "../playing-bar-song/playing-bar-song.component";

@Component({
  selector: 'app-playing-bar-song-not-subscribe',
  templateUrl: './playing-bar-song-not-subscribe.component.html',
  styleUrls: ['./playing-bar-song-not-subscribe.component.css']
})
export class PlayingBarSongNotSubscribeComponent implements OnInit {
  paused: boolean = false;
  time: number = 0;

  public static currentSong: any;

  public audio = new Audio();


  constructor(private _musicService: MusicService) {
  }

  ngOnInit(): void {
    this.loadAudio();
  }

  ngOnDestroy(): void {
    this.audio.pause();
    this.audio.currentTime = 0;
  }

  private loadAudio() {
    this.audio.src = "https://localhost:5001/Music/" + PlayingBarSongNotSubscribeComponent.currentSong.id + "/song";
    this.audio.load();
    this.audio.play();
    HomeComponent.playingSongForLogo = true
    this.audio.addEventListener("timeupdate", () => {
      this.time = this.audio.currentTime;
    })

  }

  pauseSong() {
    this.audio.pause();
    HomeComponent.playingSongForLogo = !HomeComponent.playingSongForLogo;
    this.paused = true
  }

  playSong() {
    this.audio.play()
    HomeComponent.playingSongForLogo = !HomeComponent.playingSongForLogo;
    this.paused = false
  }

  onVolumeChange(event: any) {
    console.log("Current volume: ", event.value)
    this.audio.volume = event.value
  }

  onCurrentTimeChange(event: any) {
    /*  console.log("Current time: ", event.value)
      this.audio.pause();
      this.audio.currentTime = 50;
      this.audio.play();*/
  }

  getCurrentSong() {
    return PlayingBarSongNotSubscribeComponent.currentSong
  }
}
