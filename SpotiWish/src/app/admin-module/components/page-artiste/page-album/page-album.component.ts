import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ArtisteService} from '../../../services/artiste.service';

@Component({
  selector: 'app-page-album',
  templateUrl: './page-album.component.html',
  styleUrls: ['./page-album.component.css']
})
export class PageAlbumComponent implements OnInit {
  coverURL: any;
  artist: any;
  album: any;

  constructor(public router: Router, private _artisteService: ArtisteService) { }

  ngOnInit(): void {
    this.getOneArtiste();
    this.getOneAlbum();
  }

  private getOneArtiste(){
    this._artisteService.getArtisteById(window.location.href.substr(window.location.href.lastIndexOf('/') + 1)).subscribe(
      data => {
        if (data) {
          console.log("Artist: ", data);
          this.artist = data;
          this.album = this.artist.albums
        }
      },
      error => { }
    );
  }

  private getOneAlbum(){
    this._artisteService.getAlbumById(this.artist.albums.id).subscribe(
      data => {
        if (data) {
          console.log("Album: ", data);
          this.album = data;
        }
      },
      error => { }
    );
  }

  private get

}
