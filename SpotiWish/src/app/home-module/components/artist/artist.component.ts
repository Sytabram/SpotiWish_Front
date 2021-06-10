import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  coverURL: any;

  artist: any

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.artist = JSON.parse(localStorage.getItem("artist"))
    this.coverURL = "https://localhost:5001/Artist/" + this.artist.id + "/backThumbnail";
  }

  goToAlbum(album: any) {
    let albumStr = JSON.stringify(album);
    localStorage.setItem("album", albumStr);

    this.router.navigateByUrl('/home/album')
  }

}
