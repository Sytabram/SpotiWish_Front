import { Component, OnInit } from '@angular/core';
import {Album} from '../../../../models/album';
import {ArtisteService} from '../../../../services/artiste.service';
import {Music} from '../../../../models/music';

@Component({
  selector: 'app-page-add-album',
  templateUrl: './page-add-album.component.html',
  styleUrls: ['./page-add-album.component.css']
})
export class PageAddAlbumComponent implements OnInit {

  album = {} as Album;
  music = {} as Music;
  musics: any;

  artist: any;
  currentMusicsSelected: any;
  coverURL = window.location.href.substr(window.location.href.lastIndexOf('/') + 1)

  constructor(private _artisteService: ArtisteService) { }

  ngOnInit(): void {
    this.getOneArtiste();
    this.currentMusicsSelected = []
  }

  private getOneArtiste(){
    this._artisteService.getArtisteById(window.location.href.substr(window.location.href.lastIndexOf('/') + 1)).subscribe(
      data => {
        if (data) {
          this.artist = data;
          this.album = this.artist.albums
        }
      },
      error => { }
    );
  }

  onSaveAlbum(album): void
  {
    this._artisteService.addAlbum(album, this.currentMusicsSelected).subscribe(
      data =>
      {
        this.album = {} as Album;
        this.getOneArtiste();
      },
      error => {}
    );
  }

  saveAlbum():void{
    this.onSaveAlbum(this.album);
  }

  onSaveMusic(music: Music): void{
    this._artisteService.addMusic(music).subscribe(
      data => {
        this.music = {} as Music;
        this.currentMusicsSelected.push(data);
      },
      error => {}
    );
  }

  saveMusic(): void{
    this.onSaveMusic(this.music);
  }

}
