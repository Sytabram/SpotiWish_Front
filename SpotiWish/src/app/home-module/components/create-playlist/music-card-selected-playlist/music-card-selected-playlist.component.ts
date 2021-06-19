import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-music-card-selected-playlist',
  templateUrl: './music-card-selected-playlist.component.html',
  styleUrls: ['./music-card-selected-playlist.component.css']
})
export class MusicCardSelectedPlaylistComponent implements OnInit {

  @Input() song: any; // decorate the property with @Input()

  @Output() unSelected = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  unSelectThisMusic(song){
    this.unSelected.emit(song)
  }


}
