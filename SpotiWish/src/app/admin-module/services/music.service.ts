import { Injectable } from '@angular/core';
import {Music} from '../models/music';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  url = "https://localhost:5001"

  music: Music;

  constructor(private http: HttpClient) { }

  AddSongMusic(id, song: File)
  {
    let formData = new FormData();
    formData.append('file', song, song.name);
    return this.http.post<File>(this.url + "/Music/" +id + "/song", formData);
  }

  AddImage(id, image: File)
  {
    let formData = new FormData();
    formData.append('file', image, image.name);
    return this.http.post<File>(this.url + "/Music/" +id + "/thumbnail", formData);
  }

  getSongMusic(id){
    return this.http.get(this.url + "/Music/" +id + "/song")
  }

  deleteMusic(id){
    return this.http
      .delete(this.url + "/Music/" + id);
  }
}
