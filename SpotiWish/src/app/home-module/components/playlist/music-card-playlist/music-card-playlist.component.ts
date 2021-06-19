import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-music-card-playlist',
  templateUrl: './music-card-playlist.component.html',
  styleUrls: ['./music-card-playlist.component.css']
})
export class MusicCardPlaylistComponent implements OnInit {

  @Input() song: any; // decorate the property with @Input()
  constructor() { }

  ngOnInit(): void {
  }

}
