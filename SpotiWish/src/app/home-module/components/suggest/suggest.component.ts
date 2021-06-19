import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ArtistsService} from "../../services/artists.service";
import {HomeComponent} from "../home/home.component";
import {MusicService} from "../../services/music.service";
import {PlayingBarSongComponent} from "../home/playing-bar-song/playing-bar-song.component";
import {PlayingBarSongNotSubscribeComponent} from "../home/playing-bar-song-not-subscribe/playing-bar-song-not-subscribe.component";

@Component({
  selector: 'app-suggest',
  templateUrl: './suggest.component.html',
  styleUrls: ['./suggest.component.css']
})
export class SuggestComponent implements OnInit {
  artists: any;
  tenMusic: any;

  constructor(private router: Router, private _artistService: ArtistsService, private _musicService: MusicService) { }

  ngOnInit(): void {
    if (!this.getIfSubscribed()){
      this.getTenMusics()
    }
    else {
      this.getAllArtists()
    }
  }

  private getAllArtists() {
    this._artistService.getAllArtists().subscribe(
      data => {
        if (data) {
            this.artists = data;
        }
      },
      error => { }
    );
  }

  getIfSubscribed() {
    return HomeComponent.subscribed;
  }

  private getTenMusics() {
    this._musicService.getTenMusics().subscribe(
      data => {
        if (data) {
          this.tenMusic = data;
        }
      },
      error => { }
    );
  }

  playThisSong(song) {
    PlayingBarSongNotSubscribeComponent.currentSong = song;
    HomeComponent.playingSongForLogo = !HomeComponent.playingSongForLogo
    HomeComponent.playingSongNotSubscribe = !HomeComponent.playingSongNotSubscribe
  }
}
