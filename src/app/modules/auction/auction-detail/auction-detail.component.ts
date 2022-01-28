import { Purchasing } from './../../../models/purchasing';
import { PurchasingService } from './../../../services/purchasing.service';
import { BiddingService } from './../../../services/bidding.service';
import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuctionService } from 'src/app/services/auction.service';
import { User } from 'src/app/models/user';
import { Auction } from 'src/app/models/auction';
import { AuthenticationService } from 'src/app/security/authentication.service';
import { Bidding } from 'src/app/models/bidding';

@Component({
  selector: 'app-auction-detail',
  templateUrl: './auction-detail.component.html',
  styleUrls: ['./auction-detail.component.scss']
})
export class AuctionDetailComponent implements OnInit {
  auction: Auction;
  user: User;
  bidding: Bidding;
  purchasing: Purchasing;
  constructor(private auctionService: AuctionService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private biddingService: BiddingService,
    private purchasingService: PurchasingService) { }

  ngOnInit(): void {
    if (this.authenticationService.currentUserValue !== null) {
      this.getUser(this.authenticationService.currentUserValue.id);
    }
    this.getAuction(this.activatedRoute.snapshot.params.id);
  }

  createBidding() {
    const user = this.user;
    const auction = this.auction;
    this.bidding = { auction, user };
    this.biddingService.createBidding(this.bidding).subscribe(() => {
      this.bidding = new Bidding();
    },
      error => console.log(error));
  }

  createPurchasing() {
    const user = this.user;
    const auction = this.auction;
    this.purchasing = { auction, user };
    this.purchasingService.createPurchasing(this.purchasing).subscribe(() => {
      this.purchasing = new Purchasing();
    },
      error => console.log(error));
  }

  getAuction(id: number) {
    this.auctionService.getAuctionById(id).subscribe(
      auction => {
        this.auction = auction;
        return this.auction;
      }, error => console.log(error)
    );
  }

  getUser(userId: number) {
    this.userService.getUserById(userId).subscribe(
      user => {
        this.user = user;
        return this.user;
      }, error => console.log(error)
    );
  }
}
