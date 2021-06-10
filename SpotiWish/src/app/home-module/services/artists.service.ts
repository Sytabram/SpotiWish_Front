import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {
  url = "https://localhost:5001"

  constructor(private http: HttpClient) { }

  getArtists() {
    return this.http.get(this.url + "/Artist")
  }
}
