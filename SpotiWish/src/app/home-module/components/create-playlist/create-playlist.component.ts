import { Component, OnInit } from '@angular/core';
import {AlbumService} from "../../services/album.service";
import {MusicService} from "../../services/music.service";
import {PlayingBarSongComponent} from "../home/playing-bar-song/playing-bar-song.component";
import {HomeComponent} from "../home/home.component";

@Component({
  selector: 'app-create-playlist',
  templateUrl: './create-playlist.component.html',
  styleUrls: ['./create-playlist.component.css']
})
export class CreatePlaylistComponent implements OnInit {
  someField = "";
  musics: any;

  constructor(private _musicService: MusicService) { }

  ngOnInit(): void {
    this.getAlbum();
  }

  private getAlbum() {
    this._musicService.getAllMusic().subscribe(
      data => {
        if (data) {
          this.musics = data;
        }
      },
      error => { }
    );
  }

  playThisSong(id) {
    PlayingBarSongComponent.id = id;
    HomeComponent.playingSong = !HomeComponent.playingSong
  }
}
