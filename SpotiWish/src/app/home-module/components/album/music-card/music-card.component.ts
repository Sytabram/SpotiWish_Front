import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-music-card',
  templateUrl: './music-card.component.html',
  styleUrls: ['./music-card.component.css']
})
export class MusicCardComponent implements OnInit {

  @Input() song: any; // decorate the property with @Input()

  constructor() { }

  ngOnInit(): void {
  }

}
