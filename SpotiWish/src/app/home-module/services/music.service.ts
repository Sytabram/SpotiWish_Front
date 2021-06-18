import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  url = "https://localhost:5001"

  constructor(private http: HttpClient) { }

  getAllMusic() {
    return this.http.get(this.url + "/Music")
  }

  getMusicById(id) {
    return this.http.get(this.url + "/Music/" + id)
  }

  getTenMusics() {
    return this.http.get(this.url + "/10music")
  }
}
