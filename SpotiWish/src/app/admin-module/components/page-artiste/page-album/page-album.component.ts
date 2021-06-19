import { Component, OnInit } from '@angular/core';
import {ArtisteService} from '../../../services/artiste.service';
import {MatDialog} from '@angular/material/dialog';
import {DialogDeleteComponent} from '../../dialog-delete/dialog-delete.component';

@Component({
  selector: 'app-page-album',
  templateUrl: './page-album.component.html',
  styleUrls: ['./page-album.component.css']
})
export class PageAlbumComponent implements OnInit {
  coverURL: any;
  artist: any;
  album: any;

  constructor(private _artisteService: ArtisteService, public dialog: MatDialog) { }

  ngOnInit(): void {
    setTimeout(() => {this.getOneArtiste()}, 100)
  }

  openDialog(id): void {
    const dialogRef = this.dialog.open(DialogDeleteComponent, {
      width: '350px',
    });

    dialogRef.afterClosed().subscribe(result => {
      // !! NE MARCHE PAS !!
      // if (result){
      //   this.deleteArtiste(id);
      // }
    });
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

  SaveImageAlbum(event, id): void{
    let File: FileList = event.target.files;
    if (File.length > 0){
      this._artisteService.AddImageAlbum(id, File[0]).subscribe(
        response =>
        {
          this.getOneArtiste();
        },
        error => {}
      );
    }
  }

  deleteAlbum(id): void
  {
    this._artisteService.deleteAlbum(id).subscribe(() => this.getOneArtiste())
  }

}
