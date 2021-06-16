import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PlaylistsService {
  url = "https://localhost:5001"

  constructor(private http: HttpClient) { }

  getPlaylistById(id) {
    return this.http.get(this.url + "/playlist/" + id)

  }
}
