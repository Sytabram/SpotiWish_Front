import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artist: any

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.artist = JSON.parse(localStorage.getItem("artist"))
  }

  goToAlbum(album: any) {
    let albumStr = JSON.stringify(album);
    localStorage.setItem("album", albumStr);

    this.router.navigateByUrl('/home/album')
  }

}
