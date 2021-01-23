import { AuctionService } from '../../../services/auction.service';
import { Auction } from '../../../models/auction';
import { CategoryService } from '../../../services/category.service';
import { Category } from '../../../models/category';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-auction',
  templateUrl: './create-auction.component.html',
  styleUrls: ['./create-auction.component.scss']
})
export class CreateAuctionComponent implements OnInit {

  auction: Auction = new Auction();
  submitted = false;

  constructor(private auctionService: AuctionService,
    private router: Router) { }

  ngOnInit(): void {
  }

  newAdministrator() {
    this.submitted = false;
    this.auction = new Auction();
  }

  save() {
    this.auctionService.
      createAuction(this.auction).
      subscribe(data => {
        console.log(data);
        this.auction = new Auction();
        this.goToList();
      },
        error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  goToList() {
    this.router.navigate(['/auction']);
  }

}
