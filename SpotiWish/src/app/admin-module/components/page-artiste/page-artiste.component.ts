import {Component, OnInit} from '@angular/core';
import {ArtisteService} from '../../services/artiste.service';
import {DialogDeleteComponent} from '../dialog-delete/dialog-delete.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-page-artiste',
  templateUrl: './page-artiste.component.html',
  styleUrls: ['./page-artiste.component.css']
})
export class PageArtisteComponent implements OnInit {
  artiste: any;
  searchBox: any;

  constructor(private _artisteService: ArtisteService, public dialog: MatDialog) { }

  ngOnInit(): void {
    setTimeout(() => {this.getArtists()}, 100)
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

  private getArtists() {
    this._artisteService.getArtistes().subscribe(
      data => {
        if (data) {
          this.artiste = data;
        }
      },
      error => { }
    );
  }

  SaveImageArtiste(event, id): void{
    let File: FileList = event.target.files;
    if (File.length > 0){
      this._artisteService.AddImageArtiste(id, File[0]).subscribe(
        reponse =>
        {
          this.getArtists();
        },
        error => {}
      );
    }
  }

  SaveBackgroundImageArtiste(event, id): void{
    let File: FileList = event.target.files;
    if (File.length > 0){
      this._artisteService.AddBackgroundImageArtiste(id, File[0]).subscribe(
        reponse =>
        {
          alert("Vous venez d'ajouter une image de couverture")
        },
        error => {}
      );
    }
  }

  deleteArtiste(id): void
  {
    this._artisteService.deleteArtiste(id).subscribe(() => this.getArtists())
  }

}
