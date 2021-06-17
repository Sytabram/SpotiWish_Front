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
}
