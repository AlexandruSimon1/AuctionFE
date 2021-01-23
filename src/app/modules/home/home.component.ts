
import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public categories : any;
 
  constructor(private categoryService : CategoryService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(){
      this.categoryService.getAllCategories().subscribe(
        data => this.categories = data,
        err => console.error(err)
      );
  }
}
