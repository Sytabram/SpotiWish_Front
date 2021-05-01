import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.css']
})
export class ArtistCardComponent implements OnInit {

  @Input() artist: any; // decorate the property with @Input()

  constructor() { }

  ngOnInit(): void {
  }

}
