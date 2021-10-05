import { CategoryService } from './../../../services/category.service';
import { AuctionService } from '../../../services/auction.service';
import { Auction } from '../../../models/auction';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { OnDestroyMixin, untilComponentDestroyed } from '@w11k/ngx-componentdestroyed';
import { tap, debounceTime, startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-create-auction',
  templateUrl: './create-auction.component.html',
  styleUrls: ['./create-auction.component.scss']
})
export class CreateAuctionComponent extends OnDestroyMixin implements OnInit {
  auction: Auction = new Auction();
  submitted = false;
  categories: any;

  allCategories = [];
  _filteredCategories = [];
  categoriesHash = {};

  categoryData = {};

  categoryInputControl = new FormControl('');
  constructor(private auctionService: AuctionService,
    private router: Router,
    private categoryService: CategoryService) { super(); this.initStatesAutocomplete();}

  ngOnInit(): void {
    this.categoryService.getAllCategories()
      .subscribe((responseCategory: any[]) => {
        this.allCategories = [...this.allCategories, ...responseCategory];
        debugger;
        this.categoriesHash = this.allCategories.reduce((acc, item) => ({ ...acc, [item.id]: item }), {});
        this.categoryData = {
          ...this.categoryData,
          categories: this.allCategories,
          categoriesHash: this.categoriesHash,
        }
      }, (error) => {
        console.error(error);
      });
  }
  initStatesAutocomplete() {
    this.categoryInputControl.valueChanges.pipe(
      tap(() => {
        this._filteredCategories = [];
      }),
      debounceTime(300),
      startWith(''),
      map((value: string) => {
        return value ? this._filterCategories(value, this.allCategories) : this.allCategories.slice();
      }),
      untilComponentDestroyed(this),
    ).subscribe(categories => {
      this._filteredCategories = categories;
    }, (error) => {
      console.error(error);
    })
  }

  _filterCategories(value: string | any, items: any[]): any[] {
    if (typeof value === 'object') {
      value = this.displayCategories(value.id);
    }
    const filterValue = value ? value.toString().toLowerCase() : '';
    return items.filter(item => String(this.displayCategories(item.id) || '').toLowerCase().indexOf(filterValue) >= 0);
  }

  displayCategories = (id: string): string => {
    const category = this.categoriesHash[id];
    return category ? `${category.name}` : id;
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
