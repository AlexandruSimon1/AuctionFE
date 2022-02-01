import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AuthenticationService } from 'src/app/security/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public user;
  public biddings;
  public address;
  constructor(private userService: UserService,
    private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    let currentUser = this.authenticationService.currentUserValue;
    this.getUser(currentUser.id);
    this.getUserBiddings(currentUser.id);
  }
  getUser(id: number) {
    this.userService.getUserById(id).subscribe(
      data => {
        this.user = data;
      },
      error => console.log()
    );
  }
  getUserBiddings(id: number) {
    this.userService.getBiddingsByUserId(id).subscribe(
      data => {
        this.biddings = data;
      },
      error => console.log()
    );
  }

}
