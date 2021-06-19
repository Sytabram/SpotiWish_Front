import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {
  url = "https://localhost:5001"

  constructor(private http: HttpClient) { }

  getAllArtists() {
    return this.http.get(this.url + "/Artist")
  }

  getArtistById(id) {
    return this.http.get(this.url + "/Artist/" + id)
  }


}
