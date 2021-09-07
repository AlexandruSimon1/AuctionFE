import { Category } from './../../../models/category';
import { AuctionService } from '../../../services/auction.service';
import { Auction } from '../../../models/auction';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-auction-list',
  templateUrl: './auction-list.component.html',
  styleUrls: ['./auction-list.component.scss']
})
export class AuctionListComponent implements OnInit {
  auctions:Auction[];
  categories:Category[];

  constructor(private router: Router,private categoryService: CategoryService,private activatedRoute: ActivatedRoute) { 
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this.getAuctionsByCategoryId(this.activatedRoute.snapshot.params.id);
  }

  getAuctionsByCategoryId(id:number){
    this.categoryService.getAuctionsByCategoryId(id).subscribe(
      data => {
        this.auctions = data;
      }, error => console.log(error)
    );
  }
}
