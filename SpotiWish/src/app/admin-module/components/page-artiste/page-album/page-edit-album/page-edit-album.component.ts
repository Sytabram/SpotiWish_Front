import { Component, OnInit } from '@angular/core';
import {Album} from '../../../../models/album';
import {ArtisteService} from '../../../../services/artiste.service';


@Component({
  selector: 'app-page-edit-album',
  templateUrl: './page-edit-album.component.html',
  styleUrls: ['./page-edit-album.component.css']
})
export class PageEditAlbumComponent implements OnInit {

  album = {} as Album;

  constructor(private _artisteService: ArtisteService) { }

  ngOnInit(): void {
  }

  onSaveAlbum(album: Album): void
  {
    this._artisteService.addAlbum(album).subscribe(
      data =>
      {
        this.album = {} as Album;
      },
      error => {}
    );
  }

  saveAlbum():void{
    this.onSaveAlbum(this.album);
  }



}
