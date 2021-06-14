import {HomeComponent} from "../home/home.component";
import {Component, OnInit} from "@angular/core";
import {AlbumService} from "../../services/album.service";

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
          console.log("Album: ", data);
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

  playThisSong() {
    HomeComponent.playingSong = !HomeComponent.playingSong
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
