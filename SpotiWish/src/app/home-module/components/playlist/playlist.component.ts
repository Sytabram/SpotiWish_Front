import { Component, OnInit } from '@angular/core';
import {PlaylistsService} from "../../services/playlists.service";
import {MatDialog} from "@angular/material/dialog";
import {NavigationEnd, Router} from "@angular/router";

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
          console.log(reponse);
          window.location.reload();
        },
        error => {}
      );
    }
  }
}
