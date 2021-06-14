import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ArtistsService} from "../../services/artists.service";
import {HomeComponent} from "../home/home.component";

@Component({
  selector: 'app-suggest',
  templateUrl: './suggest.component.html',
  styleUrls: ['./suggest.component.css']
})
export class SuggestComponent implements OnInit {
  artists: any;

  constructor(private router: Router, private _artistService: ArtistsService) { }

  ngOnInit(): void {
    this.getAllArtists()
  }

  private getAllArtists() {
    this._artistService.getAllArtists().subscribe(
      data => {
        if (data) {
          console.log("Artists: ", data);
          this.artists = data;
        }
      },
      error => { }
    );
  }

  getIfSubscribed() {
    return HomeComponent.subscribed;
  }
}
