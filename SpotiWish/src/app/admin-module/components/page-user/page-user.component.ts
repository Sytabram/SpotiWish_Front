import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-page-user',
  templateUrl: './page-user.component.html',
  styleUrls: ['./page-user.component.css']
})
export class PageUserComponent implements OnInit {

  user: any;

  users = {} as User;

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers(){
    this._userService.getUsers().subscribe(
      data => {
        if (data) {
          console.log("Users: ", data);
          this.user = data;
        }
      },
      error => { }
    );
  }

  SaveImageUser(event, id): void {
    let File: FileList = event.target.files;
    if (File.length > 0){
      this._userService.AddImageUser(id, File[0]).subscribe(
        reponse =>
        {
          console.log(reponse);
          this.getUsers();
        },
        error => {}
      );
    }
  }

  onDeleteArtiste(id): void
  {
    this._userService.deleteArtiste(id).subscribe(() => this.getUsers())
  }

  deleteArtiste(id): void
  {
    this.onDeleteArtiste(id);
  }
}
