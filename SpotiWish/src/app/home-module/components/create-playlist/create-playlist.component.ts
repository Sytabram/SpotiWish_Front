import { Component, OnInit } from '@angular/core';
import {AlbumService} from "../../services/album.service";
import {MusicService} from "../../services/music.service";
import {PlayingBarSongComponent} from "../home/playing-bar-song/playing-bar-song.component";
import {HomeComponent} from "../home/home.component";
import {PlaylistComponent} from "../playlist/playlist.component";
import {PlaylistsService} from "../../services/playlists.service";
import {UserService} from "../../services/user.service";
import jwtDecode from "jwt-decode";

@Component({
  selector: 'app-create-playlist',
  templateUrl: './create-playlist.component.html',
  styleUrls: ['./create-playlist.component.css']
})
export class CreatePlaylistComponent implements OnInit {
  searchBox = "";
  currentMusicsAvailable: any;
  currentMusicsSelected: any;

  playlistTitle: any;
  playlistDescription: any;
  private user: any;
  private tokenInfo: any;

  constructor(private _musicService: MusicService, private _playlistService: PlaylistsService, private _userService: UserService) { }

  ngOnInit(): void {
    this.currentMusicsSelected = []
    this.getAlbum();
  }

  private getAlbum() {
    this._musicService.getAllMusic().subscribe(
      data => {
        if (data) {
          console.log("Musics: ", data)
          this.currentMusicsAvailable = data;
        }
      },
      error => { }
    );
  }

  selected(song) {
    this.currentMusicsAvailable = this.currentMusicsAvailable.filter(item => item.id !== song.id);
    this.currentMusicsSelected.push(song);
  }

  unSelected(song) {
    this.currentMusicsSelected = this.currentMusicsSelected.filter(item => item.id !== song.id);
    this.currentMusicsAvailable.push(song);
  }

  onSavePlaylist(){
    this._playlistService.addPlaylist(this.playlistTitle, this.playlistDescription, this.user.id ,this.currentMusicsSelected).subscribe(
      response =>
      {
        console.log(response);
        window.location.reload();
      },
      error => {}
    );
  }

  savePlaylist() {
    this.tokenInfo = this.getDecodedAccessToken(localStorage.getItem("token"))
    this.getUserInfo(this.tokenInfo.Id);
  }

  private getUserInfo(id) {
    this._userService.getUserById(id).subscribe(
      data => {
        if (data) {
          this.user = data;
          this.onSavePlaylist();
        }
      },
      error => { }
    );
  }

  getDecodedAccessToken(token: string): any {
    try{
      return jwtDecode(token);
    }
    catch(Error){
      return null;
    }
  }
}
