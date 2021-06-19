import {Component, Input, OnInit} from '@angular/core';
import {MusicService} from '../../../../../services/music.service';

@Component({
  selector: 'app-card-add-music',
  templateUrl: './card-add-music.component.html',
  styleUrls: ['./card-add-music.component.css']
})
export class CardAddMusicComponent implements OnInit {

  @Input() music: any;
  @Input() currentMusic: any;

  constructor(private _musicService: MusicService) { }


  ngOnInit(): void {
  }

  SaveSongMusic(event, id): void{
    let File: FileList = event.target.files;
    if (File.length > 0){
      this._musicService.AddSongMusic(id, File[0]).subscribe(
        response =>
        {
        },
        error => {}
      );
    }
  }

  SaveImage(event, id): void{
    let File: FileList = event.target.files;
    if (File.length > 0){
      this._musicService.AddImage(id, File[0]).subscribe(
        response =>
        {
        },
        error => {}
      );
    }
  }

  removeItem(id){
    this.currentMusic = this.currentMusic.filter(item => item.id !== id);
  }

  onDeleteMusic(song): void
  {
    this._musicService.deleteMusic(song.id).subscribe(
      response => {
          this.removeItem(song.id);
      },
      error => {}
    );
  }

  deleteMusic(song): void{
    this.onDeleteMusic(song);
  }

}
