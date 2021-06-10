import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Album} from "../../../models/album";
import {Music} from "../../../models/music";
import {ArtistsService} from "../../services/artists.service";

@Component({
  selector: 'app-suggest',
  templateUrl: './suggest.component.html',
  styleUrls: ['./suggest.component.css']
})
export class SuggestComponent implements OnInit {
  artists: any;
  nepalAlbum: Album[];
  nepalMusics: Music[];

  constructor(private router: Router, private _artistService: ArtistsService) { }

  ngOnInit(): void {
    localStorage.clear();
    this.nepalMusics = [
      {
        Id: 3,
        Name: "Trajectoire",
        Author: 'Nepal',
        Thumbnail: null,
        TimeOfPlays: 2312432,
        ReleaseDate: 2020,
        song: null,
        Album: 'Adios Bahamas',
        Style: 'Rap FR'
      },
      {
        Id: 2,
        Name: "Lemonade",
        Author: 'Nepal',
        Thumbnail: null,
        TimeOfPlays: 785349,
        ReleaseDate: 2020,
        song: null,
        Album: 'Adios Bahamas',
        Style: 'Rap FR'
      }
    ]
    this.nepalAlbum = [
      {
        Id: 1,
        Name: "Adios Bahamas",
        Thumbnail: null,
        TotalTime: 40,
        TotalHeard: 2343253,
        YearReleased: 2020,
        Artists: 'Nepal',
        Musics: this.nepalMusics
      }
    ]
    this.artists = [
      {
        Id: 1,
        Name: "Nepal",
        ProfilThumbnail: null,
        BackGroundThumbnail: null,
        Albums: this.nepalAlbum,
        TimeOfHeard: 1498374
      },
      {
        Id: 2,
        Name: "Lomepal",
        ProfilThumbnail: null,
        BackGroundThumbnail: null,
        Albums: null,
        TimeOfHeard: 4368724
      },
      {
        Id: 1,
        Name: "Georgio",
        ProfilThumbnail: null,
        BackGroundThumbnail: null,
        Albums: null,
        TimeOfHeard: 2314324
      },
    ]
    this.getArtists()
  }

  goToArtist(artist: any) {
    let artistStr = JSON.stringify(artist);
    localStorage.setItem("artist", artistStr);

    this.router.navigateByUrl('/home/artist')
  }

  private getArtists() {
    this._artistService.getArtists().subscribe(
      data => {
        if (data) {
          console.log("Artists: ", data);
          this.artists = data;
        }
      },
      error => { }
    );  }
}
