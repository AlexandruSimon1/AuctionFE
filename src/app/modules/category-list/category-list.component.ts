import { Component, OnInit } from '@angular/core';
import { OnDestroyMixin, untilComponentDestroyed } from '@w11k/ngx-componentdestroyed';
import { FormControl } from '@angular/forms';
import { tap, debounceTime, startWith, map } from 'rxjs/operators';
import { CategoryService } from './../../services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent extends OnDestroyMixin  implements OnInit {
  categories: any;

  allCategories = [];
  _filteredCategories = [];
  categoriesHash = {};

  categoryData = {};

  categoryInputControl = new FormControl('');
  constructor(private categoryService: CategoryService) {
    super();
   }


  ngOnInit(): void {
    this.categoryService.getAllCategories()
      .subscribe((responseCategory: any[]) => {
        this.allCategories = [...this.allCategories, ...responseCategory];
        this.categoriesHash = this.allCategories.reduce((acc, item) => ({ ...acc, [item.id]: item }), {});
        this.categoryData = {
          ...this.categoryData,
          categories: this.allCategories,
          categoriesHash: this.categoriesHash,
        }
      }, (error) => {
        console.error(error);
      });

      this.initStatesAutocomplete();
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

}
