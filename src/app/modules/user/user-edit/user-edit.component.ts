import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  user: User = new User();

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  submitUser() {
    this.userService.getUserById(this.activatedRoute.snapshot.params.id).subscribe(
      data => {
        data.firstName = this.user.firstName;
        data.lastName = this.user.lastName;
        data.email = this.user.email;
        this.userService.updateUserById(this.activatedRoute.snapshot.params.id, data).subscribe(
          data => {
            return true;
          },
          error => {
            return Observable.throw(error);
          }
        );
      },
      error => console.log(error)
    );

  }
}
