import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuctionService } from 'src/app/services/auction.service';

@Component({
  selector: 'app-auction-detail',
  templateUrl: './auction-detail.component.html',
  styleUrls: ['./auction-detail.component.scss']
})
export class AuctionDetailComponent implements OnInit {
  public auctions;

  constructor(private auctionService: AuctionService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAuction(this.activatedRoute.snapshot.params.id);
  }

  getAuction(id: number){
    this.auctionService.getAuctionById(id).subscribe(
      data => {
        this.auctions = data;
      }, error => console.log()
    );
  }
}
