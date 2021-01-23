import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
  public user: User;
  userForm: FormGroup;
  validMessage = '';

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required)
    });
  }

  submitUser(): void {
    if (this.userForm.valid) {
      this.validMessage = 'Details updated.';
      console.log(this.userForm.value);
      this.user = {
        id: this.activatedRoute.snapshot.params.id,
        name: this.userForm.value.name, email: this.userForm.value.email
      };
      this.userService.updateUserById(this.activatedRoute.snapshot.params.id,this.user).subscribe(
        data => {
          console.log(data);
          return true;
        },
        error => {
          return Observable.throw(error);
        }
      );
    } else {
      this.validMessage = 'Please fill out the details before submitting.';
    }
  }
}
