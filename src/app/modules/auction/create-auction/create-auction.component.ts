import { Auction } from './../../../models/auction';
import { Category } from './../../../models/category';
import { CategoryService } from './../../../services/category.service';
import { AuctionService } from '../../../services/auction.service';
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
  categories: any;
  category: Category;
  createAuction: Auction;
  constructor(private auctionService: AuctionService,
    private router: Router,
    private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getAllCategories().subscribe(
      data => this.categories = data,
      err => console.log(err)
    );
  }

  getCategoryById(id: number) {
    this.categoryService.getCategoryById(id).subscribe(
      data => this.category = data,
      err => console.log(err)
    );
    return this.category;
  }

  save() {
    this.auction.category = this.category;
    this.auctionService.createAuction(this.auction).
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
    this.router.navigate(['']);
  }

}
