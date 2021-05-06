import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  album: any

  constructor() { }

  ngOnInit(): void {
    this.album = JSON.parse(localStorage.getItem("album"))
    console.log(this.album)
  }

}
