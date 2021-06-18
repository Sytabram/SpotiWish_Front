import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = "https://localhost:5001"

  constructor(private http: HttpClient) { }

  getUserById(id) {
    return this.http.get(this.url + "/User/" + id)
  }

  AddImageUser(id, image) {
    let formData = new FormData();
    formData.append('file', image, image.name);
    return this.http.post<File>(this.url + "/user/" + id + "/thumbnail", formData)
  }

  removeImageUser(id) {
    return this.http.delete<File>(this.url + "/user/" + id + "/thumbnail")
  }
}
