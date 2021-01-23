import { BiddingService } from './../../../services/bidding.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public user;
  public biddings;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private biddingService: BiddingService) {
  }

  ngOnInit(): void {
    this.getUser(this.activatedRoute.snapshot.params.id);
    this.getUserBiddings(this.activatedRoute.snapshot.params.id);
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
    this.biddingService.getBiddingsByUserId(id).subscribe(
      data => {
        this.biddings = data;
      },
        error => console.log()
    );
  }


}
