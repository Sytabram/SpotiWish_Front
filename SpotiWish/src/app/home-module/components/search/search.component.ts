import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  someField = "";
  genres: any[];

  constructor() { }

  ngOnInit(): void {
    this.genres = [
      {
        nameGenre: "Rock",
        nbrMusic: 15,
      },
      {
        nameGenre: "Country",
        nbrMusic: 12,
      },
      {
        nameGenre: "Métal",
        nbrMusic: 43,
      },
      {
        nameGenre: "Chanson française",
        nbrMusic: 22,
      },
      {
        nameGenre: "Rap français",
        nbrMusic: 55,
      },
      {
        nameGenre: "Rock",
        nbrMusic: 15,
      },
      {
        nameGenre: "Country",
        nbrMusic: 12,
      },
      {
        nameGenre: "Métal",
        nbrMusic: 43,
      },

    ]
  }

}
