import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = "https://localhost:5001"
  urlPostUser = "https://localhost:5001/auth/CreateAdmin"

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.url + "/User")
  }

  getUserById(id){
    return this.http.get(this.url + "/User/" + id)
  }

  addUser(user: User){
    let options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json'),
    }
    let json =
      {
        "name": user.UserName,
        "email": user.Email,
        "password": user.Password,
      }
      return this.http
        .post(this.urlPostUser, json, options);
  }

  deleteArtiste(id){
    let options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json'),
    };
    return this.http
      .delete(this.url + "/User/" + id, options);
  }

  AddImageUser(id, image: File)
  {
    let formData = new FormData();
    formData.append('file', image, image.name);
    return this.http.post<File>(this.url + "/User/" + id + "/Thumbnail", formData)
  }

}
