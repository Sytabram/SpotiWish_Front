import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PlaylistsService {
  url = "https://localhost:5001"

  constructor(private http: HttpClient) {
  }

  getPlaylistById(id) {
    return this.http.get(this.url + "/playlist/" + id)

  }

  AddImagePlaylist(id, image: File) {
    let formData = new FormData();
    formData.append('file', image, image.name);
    return this.http.post<File>(this.url + "/playlist/" + id + "/thumbnail", formData)
  }

  addPlaylist(playlistTitle, playlistDescription, userId, currentMusicsSelected) {
    let options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json'),
    }
    let result = currentMusicsSelected.map(a => a.id);
    let json =
      {
        "name": playlistTitle,
        "descrition": playlistDescription,
        "userId": [
          userId
        ],
        "musicId": result
      }

    console.log("json: ", json)

    return this.http.post(this.url + "/playlist", json, options);
  }

  deletePlaylist(id) {
    return this.http.delete(this.url + "/playlist/" + id)
  }
}
