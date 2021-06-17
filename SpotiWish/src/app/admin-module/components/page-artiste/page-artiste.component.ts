import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ArtisteService} from '../../services/artiste.service';
import {Artiste} from '../../models/artist';


@Component({
  selector: 'app-page-artiste',
  templateUrl: './page-artiste.component.html',
  styleUrls: ['./page-artiste.component.css']
})
export class PageArtisteComponent implements OnInit {

  artiste: any;
  artist = {} as Artiste;
  durationInSeconds = 5;

  constructor(private _artisteService: ArtisteService) { }


  ngOnInit(): void {
    this.getArtists();
  }

  private getArtists() {
    this._artisteService.getArtistes().subscribe(
      data => {
        if (data) {
          console.log("Artists: ", data);
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
          console.log(reponse);
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
          console.log(reponse);
        },
        error => {}
      );
    }
  }

  onDeleteArtiste(id): void
  {
    this._artisteService.deleteArtiste(id).subscribe(() => this.getArtists())
  }

  deleteArtiste(id): void
  {
    this.onDeleteArtiste(id);
  }

}
