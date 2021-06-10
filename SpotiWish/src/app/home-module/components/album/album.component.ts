import {HomeComponent} from "../home/home.component";
import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  album: any;
  coverURL: any;

  constructor() { }

  ngOnInit(): void {
    this.album = JSON.parse(localStorage.getItem("album"))
    this.coverURL = "https://localhost:5001/Album/" + this.album.id + "/thumbnail";
    console.log(this.album)
  }

  playThisSong(song: any) {
    localStorage.removeItem("playingSong")
    let songStr = JSON.stringify(song);
    localStorage.setItem("playingSong", songStr);
    HomeComponent.playingSong = !HomeComponent.playingSong
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
