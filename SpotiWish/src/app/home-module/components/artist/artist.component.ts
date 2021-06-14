import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Artist} from "../../../models/artist";
import {ArtistsService} from "../../services/artists.service";
import {timer} from "rxjs";

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  coverURL: any;
  artist: any

  constructor(private router: Router, private _artistService: ArtistsService) { }

  ngOnInit(): void {
    this.getArtist();
  }

  private getArtist() {
    this._artistService.getArtistById(window.location.href.substr(window.location.href.lastIndexOf('/') + 1)).subscribe(
      data => {
        if (data) {
          console.log("Artist: ", data);
          this.artist = data;
        }
        this.getCoverURL(this.artist.id)
      },
      error => { }
    );
  }

  private getCoverURL(id) {
    this.coverURL = "https://localhost:5001/Artist/" + id + "/backThumbnail";
  }
}
