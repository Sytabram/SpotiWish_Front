import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Artiste} from '../models/artist';
import {Album} from '../models/album';
import {Music} from '../models/music';

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

  addMusic(music: Music){
    let options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json'),
    }
    let json =
      {
        "name": music.Name,
        "timeOfPlays": music.TimeOfPlays,
        "authorId": window.location.href.substr(window.location.href.lastIndexOf('/') + 1),
        "albumId": [0],
        "playlistId": [0],
      }
      return this.http
        .post(this.url + "/Music", json, options);
  }

  updateArtiste(id, nameArtiste, numberListeningArtiste, currentAlbums){
    let options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json'),
    }
    let result = currentAlbums.map(a => a.id);
    let json =
      {
        "name": nameArtiste,
        "timeOfHeard": numberListeningArtiste,
        "albumsId": result
      }
      console.log("json: ", json)
      return this.http
        .post(this.urlPostArtist + "/" + id, json, options);
  }

  updateAlbum(id, idArtiste, nameAlbum, totalTime, yearReleased, totalHeard, musics){
    let options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json'),
    }
    let result = musics.map(a => a.id);
    let json =
      {
        "name": nameAlbum,
        "totalTime": totalTime,
        "yearReleased": yearReleased,
        "totalHeard": totalHeard,
        "artistId": [
          idArtiste,
          ],
        "musicId": result
      }
    console.log("json: ", json)
    return this.http
      .post(this.url + "/Album/" + id, json, options);
  }

  addAlbum(album, musicSelected){
    let options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json'),
    }
    let result = musicSelected.map(a => a.id)
    let json = {
      "name": album.Name,
      "totalTime": album.TotalTime,
      "totalHeard": album.TotalHeard,
      "yearReleased": album.YearReleased,
      "artistId": [
        window.location.href.substr(window.location.href.lastIndexOf('/') + 1)
      ],
      "musicId": result
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

  deleteAlbum(id){
    let options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json'),
    };
    return this.http
      .delete(this.url + "/Album/" + id, options);
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
    return this.http.post<File>(this.url + "/Artist/" + id + "/backThumbnail", formData)
  }

  AddImageAlbum(id, image: File)
  {
    let formData = new FormData();
    formData.append('file', image, image.name);
    return this.http.post<File>(this.url + "/Album/" + id + "/thumbnail", formData)
  }
}



















