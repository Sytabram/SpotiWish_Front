import {Component, Input, OnInit, Output} from '@angular/core';
import {Album} from '../../../../models/album';
import {ArtisteService} from '../../../../services/artiste.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-page-edit-album',
  templateUrl: './page-edit-album.component.html',
  styleUrls: ['./page-edit-album.component.css']
})
export class PageEditAlbumComponent implements OnInit {
  coverURL = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
  albums = {} as Album;
  album: any;
  musics: any;

  currentMusicsSelected: any;
  newAlbumName: any;
  newAlbumTotalTime: any;
  newAlbumYearReleased: any;
  newAlbumTotalHeard: any;
  idArtiste: any;

  constructor(private _artisteService: ArtisteService, private _activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getOneAlbum(this.coverURL);
    this.getId();
  }

  getId(){
    this._activatedroute.params.subscribe(params => {
      this.idArtiste = params['idArtiste'];
    });
  }

  onSaveAlbum(): void
  {
    this._artisteService.updateAlbum(this.coverURL, this.idArtiste, this.newAlbumName, this.newAlbumTotalTime, this.newAlbumYearReleased, this.newAlbumTotalHeard, this.musics).subscribe(
      data =>
      {
        this.albums = {} as Album;
      },
      error => {}
    );
  }

  saveAlbum(): void{
    this.onSaveAlbum();
  }

  private getOneAlbum(id){
    this._artisteService.getAlbumById(id).subscribe(
      data => {
        if (data) {
          this.album = data;
          this.musics = this.album.musics;
          this.newAlbumName = this.album.name;
          this.newAlbumTotalTime = this.album.totalTime;
          this.newAlbumYearReleased = this.album.yearReleased;
          this.newAlbumTotalHeard = this.album.totalHeard;
        }
      },
      error => {}
    )
  }
}
