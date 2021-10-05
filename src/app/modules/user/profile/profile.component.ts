import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public user;
  public biddings;
  public address;
  currentUser: User;
  private id;
  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.getUser(this.id);
    this.getUserBiddings(1);
  }
  getUser(id: number){
    this.userService.getUserById(id).subscribe(
      data => {
        this.user = data;
      },
      error => console.log()
    );
  }
  getUserBiddings(id: number){
    this.userService.getBiddingsByUserId(id).subscribe(
      data => {
        this.biddings = data;
      },
        error => console.log()
    );
  }

}
