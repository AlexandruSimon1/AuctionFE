import { S3Service } from './../../../services/s3.service';
import { Auction } from './../../../models/auction';
import { Category } from './../../../models/category';
import { CategoryService } from './../../../services/category.service';
import { AuctionService } from '../../../services/auction.service';
import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-auction',
  templateUrl: './create-auction.component.html',
  styleUrls: ['./create-auction.component.scss']
})
@Injectable()
export class CreateAuctionComponent implements OnInit {
  auction: Auction = new Auction();
  submitted = false;
  categories: any;
  category: Category;
  selectedFile: File = null;
  constructor(private auctionService: AuctionService,
    private router: Router,
    private categoryService: CategoryService,
    private s3Service: S3Service) {
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
  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }

  save() {
    this.auction.category = this.category;

    this.auctionService.createAuction(this.auction).
      subscribe(auction => {
        this.goToList();
        this.s3Service.createImage(auction.id, this.selectedFile)
          .subscribe(res => {
            return true;
          });
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
