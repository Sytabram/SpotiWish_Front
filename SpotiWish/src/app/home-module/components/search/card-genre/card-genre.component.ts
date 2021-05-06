import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-genre',
  templateUrl: './card-genre.component.html',
  styleUrls: ['./card-genre.component.css']
})
export class CardGenreComponent implements OnInit {

  @Input() genre: any;

  color = ["#BA5D07","#2D46B9","#148A08","#E61E32", "#27856A", "#1E3264", "#8D67AB", "#E8115B", "#1E3264", "#E13300", "#535353", "#608108", "#148A08", "#1E3264", "#F59B23", "#8C1932", "#BA5D07", "#A0C3D2"];

  randColor = (this.color)[Math.floor(Math.random() * this.color.length)];

  constructor() { }

  ngOnInit(): void {

  }

}
