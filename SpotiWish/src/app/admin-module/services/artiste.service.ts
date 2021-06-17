import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Artiste} from '../models/artist';
import {Album} from '../models/album';

@Injectable({
  providedIn: 'root'
})
export class ArtisteService {
  url = "https://localhost:5001"
  urlPostArtist = "https://localhost:5001/Artist"

  artiste: Artiste;

  constructor(private http: HttpClient) { }

  getArtistes() {
    return this.http.get(this.url + "/Artist")
  }

  getArtisteById(id){
    return this.http.get(this.url + "/Artist/" + id)
  }

  getAlbumById(id){
    return this.http.get(this.url + "/Album/" + id)
  }

  addArtiste(artiste: Artiste){
    let options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json'),
    }
    let json =
      {
        "name": artiste.Name,
        "timeOfHeard": artiste.TimeOfHeard,
        "albumsId": [
          0
        ]
      }
    return this.http
      .post(this.urlPostArtist, json, options);
  }

  addAlbum(album: Album){
    let options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json'),
    }
    let json = {
      "name": album.Name,
      "totalTime": 0,
      "totalHeard": 0,
      "yearReleased": album.YearReleased,
      "artistId": [
        window.location.href.substr(window.location.href.lastIndexOf('/') + 1)
      ],
      "musicId": [
        0
      ]
    }
    return this.http
      .post(this.url + "/Album", json, options);
  }

  deleteArtiste(id){
    let options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json'),
    };
    return this.http
      .delete(this.url + "/Artist/" + id, options);
  }

  AddImageArtiste(id, image: File)
  {
    let formData = new FormData();
    formData.append('file', image, image.name);
    return this.http.post<File>(this.url + "/Artist/" + id + "/profilThumbnail", formData)
  }

  AddBackgroundImageArtiste(id, image: File)
  {
    let formData = new FormData();
    formData.append('file', image, image.name);
    return this.http.post<File>(this.url + "/Artist" + id + "/backThumbnail", formData)
  }
}



















