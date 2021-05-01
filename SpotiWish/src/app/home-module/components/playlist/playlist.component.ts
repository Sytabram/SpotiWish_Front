import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  playlists: any[];

  constructor() { }

  ngOnInit(): void {
    this.playlists = [
      {
        namePlaylist: "Good Rap",
      },
      {
        namePlaylist: "Chill night",
      },
      {
        namePlaylist: "Turn up",
      },
      {
        namePlaylist: "Indie Rock",
      },
      {
        namePlaylist: "High Life",
      },
      {
        namePlaylist: "Music Party",
      },
      {
        namePlaylist: "Happiness",
      },
      {
        namePlaylist: "LifeStyle",
      },
      {
        namePlaylist: "Go Fast",
      },
    ]
  }

}
