import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-music-card-add-playlist',
  templateUrl: './music-card-add-playlist.component.html',
  styleUrls: ['./music-card-add-playlist.component.css']
})
export class MusicCardAddPlaylistComponent implements OnInit {

  @Input() song: any; // decorate the property with @Input()

  @Output() selected = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  selectThisMusic(song){
    this.selected.emit(song)
  }

}
