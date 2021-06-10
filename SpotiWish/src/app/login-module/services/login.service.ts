import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = "https://localhost:5001"

  constructor(private http: HttpClient) { }


  newUser(email, username, password) {
    let  json =
      {
        "name": username,
        "email": email,
        "password": password,
        "isAdmin": false
      }
    return this.http.post(this.url + "/auth/Register", json)
  }

  loginUser(username, password) {
    let  json =
      {
        "name": username,
        "password": password,
      }
    return this.http.post(this.url + "/auth/Login", json)
  }
}
