import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suggest',
  templateUrl: './suggest.component.html',
  styleUrls: ['./suggest.component.css']
})
export class SuggestComponent implements OnInit {
  artists: any[];

  constructor() { }

  ngOnInit(): void {
    this.artists = [
      {
        imgURL: "imgURL1",
        artistName: "Lomepal"
      },
      {
        imgURL: "imgURL2",
        artistName: "Nepal"
      },
      {
        imgURL: "imgURL3",
        artistName: "Fatal Bazooka"
      },
    ]
  }

}
