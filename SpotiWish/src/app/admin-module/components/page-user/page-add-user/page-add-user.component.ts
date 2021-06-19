import { Component, OnInit } from '@angular/core';
import {User} from '../../../models/user';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-page-add-user',
  templateUrl: './page-add-user.component.html',
  styleUrls: ['./page-add-user.component.css']
})
export class PageAddUserComponent implements OnInit {

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
      },
      error =>
      {}
    );
  }

  saveUser():void{
    this.onSaveUser(this.user);
  }

}
