import { Component, OnInit } from '@angular/core';
import {User} from '../../../models/user';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-page-edit-user',
  templateUrl: './page-edit-user.component.html',
  styleUrls: ['./page-edit-user.component.css']
})
export class PageEditUserComponent implements OnInit {

  user = {} as User;

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
  }

  onSaveUser(user: User): void
  {
    this._userService.addUser(user).subscribe(
      data =>
      {
        this.user = {} as User;
        window.location.reload();
      },
      error =>
      {}
    );
  }

  saveUser():void{
    this.onSaveUser(this.user);
  }



}
