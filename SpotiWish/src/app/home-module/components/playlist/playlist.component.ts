import { Component, OnInit } from '@angular/core';
import {HomeComponent} from "../home/home.component";
import {PlaylistsService} from "../../services/playlists.service";

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  playlistInfo: any;

  constructor(private _playlistService: PlaylistsService) { }

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
}
