import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuctionService } from 'src/app/services/auction.service';
import { User } from 'src/app/models/user';
import { Auction } from 'src/app/models/auction';

@Component({
  selector: 'app-auction-detail',
  templateUrl: './auction-detail.component.html',
  styleUrls: ['./auction-detail.component.scss']
})
export class AuctionDetailComponent implements OnInit {
  public auctions;
  user: User = new User();
  auction: Auction = new Auction();
  constructor(private auctionService: AuctionService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getUser(1);
    this.getAuction(this.activatedRoute.snapshot.params.id);
  }

  getAuction(id: number) {
    this.auctionService.getAuctionById(id).subscribe(
      data => {
        this.auctions = data;
      }, error => console.log(error)
    );
  }

  getUser(userId: number) {
    this.userService.getUserById(userId).subscribe(
      data => {
        this.user = data;
      }, error => console.log(error)
    );
  }
}
