import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User = new User();

  constructor(private authorizationService: AuthorizationService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  login() {
    this.authorizationService.userSignIn(this.user)
      .subscribe(data => {
        console.log(data);
        this.user = new User();
      },
        error => console.log(error));
    this.router.navigate(['']);
    return localStorage.getItem('token');
  }
}
