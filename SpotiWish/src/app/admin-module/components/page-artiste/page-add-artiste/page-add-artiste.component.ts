import { Component, OnInit } from '@angular/core';
import {Artiste} from '../../../models/artist';
import {ArtisteService} from '../../../services/artiste.service';

@Component({
  selector: 'app-page-add-artiste',
  templateUrl: './page-add-artiste.component.html',
  styleUrls: ['./page-add-artiste.component.css']
})
export class PageAddArtisteComponent implements OnInit {

  artiste = {} as Artiste;

  constructor(private _artisteService: ArtisteService) { }

  ngOnInit(): void {
  }

  onSaveArtiste(artiste: Artiste): void
  {
    this._artisteService.addArtiste(artiste).subscribe(
      data =>
      {
        this.artiste = {} as Artiste;
        window.location.reload();
      },
      error =>
      {}
    );
  }

  saveArtiste():void{
    this.onSaveArtiste(this.artiste);
  }

}

