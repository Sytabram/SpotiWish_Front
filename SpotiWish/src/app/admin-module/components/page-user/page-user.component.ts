import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogDeleteComponent} from '../dialog-delete/dialog-delete.component';


@Component({
  selector: 'app-page-user',
  templateUrl: './page-user.component.html',
  styleUrls: ['./page-user.component.css']
})
export class PageUserComponent implements OnInit {

  user: any;

  users = {} as User;

  constructor(private _userService: UserService, public dialog: MatDialog) { }

  ngOnInit(): void {
    setTimeout(() => {this.getUsers()}, 100)

  }

  openDialog(id): void {
    const dialogRef = this.dialog.open(DialogDeleteComponent, {
      width: '350px',
    });

    dialogRef.afterClosed().subscribe(result => {
      // !! NE MARCHE PAS !!
      // if (result){
      //   this.deleteArtiste(id);
      // }
    });
  }

  private getUsers(){
    this._userService.getUsers().subscribe(
      data => {
        if (data) {
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
          this.getUsers();
        },
        error => {}
      );
    }
  }

  onDeleteUser(id): void
  {
    this._userService.deleteUser(id).subscribe(() => this.getUsers())
  }

  deleteUser(id): void
  {
    this.onDeleteUser(id);
  }
}
