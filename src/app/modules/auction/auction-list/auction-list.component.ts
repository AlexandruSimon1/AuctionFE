import { AuctionService } from '../../../services/auction.service';
import { Auction } from '../../../models/auction';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auction-list',
  templateUrl: './auction-list.component.html',
  styleUrls: ['./auction-list.component.scss']
})
export class AuctionListComponent implements OnInit {
  auctions:Auction[];

  constructor(private auctionService:AuctionService) { }

  ngOnInit(): void {
    this.getAllAuctions();
  }

  private getAllAuctions() {
    this.auctionService.getAllAuctions()
      .subscribe(data => {
        this.auctions = data;
      });
  }
}
