import {HomeComponent} from "../home/home.component";
import {Component, OnInit} from "@angular/core";
import {AlbumService} from "../../services/album.service";
import {PlayingBarSongComponent} from "../home/playing-bar-song/playing-bar-song.component";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  album: any;
  coverURL: any;
  musics: any;

  constructor(private _albumService: AlbumService) { }

  ngOnInit(): void {
    this.getAlbum();
  }

  private getAlbum() {
    this._albumService.getAlbumById(window.location.href.substr(window.location.href.lastIndexOf('/') + 1)).subscribe(
      data => {
        if (data) {
          this.album = data;
        }
        this.getCoverURL(this.album.id)
      },
      error => { }
    );
  }

  private getCoverURL(id) {
    this.coverURL = "https://localhost:5001/Album/" +id + "/thumbnail";
  }

  playThisSong(id) {
    PlayingBarSongComponent.id = id;
    HomeComponent.playingSongForLogo = !HomeComponent.playingSongForLogo

    HomeComponent.playingSong = !HomeComponent.playingSong
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
