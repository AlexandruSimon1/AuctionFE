import { Auction } from './../../../models/auction';
import { Category } from './../../../models/category';
import { CategoryService } from './../../../services/category.service';
import { AuctionService } from '../../../services/auction.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
  selectedFile : File = null;
  constructor(private auctionService: AuctionService,
    private router: Router,
    private categoryService: CategoryService,
    private http: HttpClient) {
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
  onFileSelected(event){
    this.selectedFile = <File> event.target.files[0];
  }

  save() {
    const fd = new FormData();
    var parts = this.auction.photos.split('\\');
    fd.append('image', this.selectedFile, this.selectedFile.name);
    this.auction.photos = parts[parts.length - 1];
    this.auction.category = this.category;

    // this.http.post('http://localhost:4200/assets/images', fd)
    //   .subscribe(res => {
    //     console.log(res);
    //   });
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
