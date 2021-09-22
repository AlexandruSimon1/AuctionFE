import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthorizationService } from './../../services/authorization.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  submitted = false;
  constructor(private authorizationService: AuthorizationService, 
              private router: Router, 
              private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  register() {
    this.authorizationService.userSignUp(this.user)
      .subscribe(data => {
        console.log(data);
        this.user = new User();
      },
        error => console.log(error));
    this.submitted = true;
    this.router.navigate([''], { relativeTo: this.route });
  }
}
