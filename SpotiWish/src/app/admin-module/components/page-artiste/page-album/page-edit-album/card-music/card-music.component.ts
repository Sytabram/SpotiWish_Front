import {Component, Input, OnInit} from '@angular/core';
import {MusicService} from '../../../../../services/music.service';

@Component({
  selector: 'app-card-music',
  templateUrl: './card-music.component.html',
  styleUrls: ['./card-music.component.css']
})
export class CardMusicComponent implements OnInit {

  @Input() music: any;
  songs: any;

  constructor(private _musicService: MusicService) { }

  ngOnInit(): void {
    this.getSongMusic(this.music.id)
    console.log(this.songs)
  }

  SaveSongMusic(event, id): void{
    let File: FileList = event.target.files;
    if (File.length > 0){
      this._musicService.AddSongMusic(id, File[0]).subscribe(
        response =>
        {
          console.log(response);
        },
        error => {}
      );
    }
  }

  private getSongMusic(id) {
    this._musicService.getSongMusic(id).subscribe(
      data => {
        if (data) {
          this.songs = data;
        }
      },
      error => {}
    );
  }




}
