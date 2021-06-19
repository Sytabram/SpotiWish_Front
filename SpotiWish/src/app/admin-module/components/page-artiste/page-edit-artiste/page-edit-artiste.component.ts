import { Component, OnInit } from '@angular/core';
import {Artiste} from '../../../models/artist';
import {ArtisteService} from '../../../services/artiste.service';

@Component({
  selector: 'app-page-edit-artiste',
  templateUrl: './page-edit-artiste.component.html',
  styleUrls: ['./page-edit-artiste.component.css']
})
export class PageEditArtisteComponent implements OnInit {
  coverURL = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
  artist: any;

  artiste = {} as Artiste;
  currentAlbums: any;
  newArtisteName: any;
  newTimeOfHeard: any;

  constructor(private _artisteService: ArtisteService) { }

  ngOnInit(): void {
    this.currentAlbums = []
    this.getOneArtiste();
  }

  onSaveArtiste(): void
  {
    this._artisteService.updateArtiste(this.coverURL, this.newArtisteName, this.newTimeOfHeard, this.currentAlbums).subscribe(
      data =>
      {
        console.log(data);
      },
      error => {}
    );
  }

  saveArtiste(): void{
    this.onSaveArtiste();
  }

  private getOneArtiste(){
    this._artisteService.getArtisteById(this.coverURL).subscribe(
      data => {
        if (data) {
          this.artist = data;
          this.currentAlbums = this.artist.albums;
          this.newArtisteName = this.artist.name;
          this.newTimeOfHeard = this.artist.timeOfHeard;
        }
      },
      error => { }
    );
  }
}
