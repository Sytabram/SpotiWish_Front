import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  url = "https://localhost:5001"

  constructor(private http: HttpClient) { }

  getAlbumById(id) {
    return this.http.get(this.url + "/Album/" + id)
  }
}
