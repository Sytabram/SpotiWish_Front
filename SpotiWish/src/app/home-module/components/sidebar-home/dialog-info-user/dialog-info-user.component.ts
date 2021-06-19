import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {UserService} from "../../../services/user.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-dialog-info-user',
  templateUrl: './dialog-info-user.component.html',
  styleUrls: ['./dialog-info-user.component.css']
})
export class DialogInfoUserComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogInfoUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _userService: UserService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }


  SaveImageUser(event, id) {
    let File: FileList = event.target.files;
    if (File.length > 0){
      this._userService.AddImageUser(id, File[0]).subscribe(
        reponse =>
        {
          window.location.reload();
        },
        error => {}
      );
    }
  }

  removeImageUser(id) {
    this._userService.removeImageUser(id).subscribe(
      reponse =>
      {
        window.location.reload();
      },
      error => {}
    );
  }

}
