import { Component, OnInit } from '@angular/core';
import {PlaylistsService} from "../../services/playlists.service";
import {MatDialog} from "@angular/material/dialog";
import {NavigationEnd, Router} from "@angular/router";
import {PlayingBarSongComponent} from "../home/playing-bar-song/playing-bar-song.component";
import {HomeComponent} from "../home/home.component";

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  playlistInfo: any;

  constructor(private _playlistService: PlaylistsService, public dialog: MatDialog, private router: Router) {
    this.router.events.subscribe((value => {
      if (value instanceof NavigationEnd){
        this.getPlaylistById()
      }
    }))
  }

  ngOnInit(): void {
    this.getPlaylistById()
  }

  private getPlaylistById() {
    this._playlistService.getPlaylistById(window.location.href.substr(window.location.href.lastIndexOf('/') + 1)).subscribe(
      data => {
        if (data) {
          this.playlistInfo = data;
        }
      },
      error => { }
    );
  }

  SaveImagePlaylist(event, id) {
    let File: FileList = event.target.files;
    if (File.length > 0){
      this._playlistService.AddImagePlaylist(id, File[0]).subscribe(
        reponse =>
        {
          window.location.reload();
        },
        error => {}
      );
    }
  }

  deletePlaylist(id) {
    this._playlistService.deletePlaylist(id).subscribe(
      response =>
      {
        window.location.reload();
      },
      error => {}
    );
  }

  playThisSong(id) {
    PlayingBarSongComponent.id = id;
    HomeComponent.playingSongForLogo = !HomeComponent.playingSongForLogo
    HomeComponent.playingSong = !HomeComponent.playingSong;
  }

  playThisFirstSong() {
    PlayingBarSongComponent.id = this.playlistInfo?.musics[0].id;
    HomeComponent.playingSong = !HomeComponent.playingSong;
  }
}
