import { Purchasing } from './../../../models/purchasing';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-purchasing-list',
  templateUrl: './purchasing-list.component.html',
  styleUrls: ['./purchasing-list.component.scss']
})
export class PurchasingListComponent implements OnInit {
  purchases : Purchasing[];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getPurchasesByUserId(1);
  }

  getPurchasesByUserId(id: number) {
    this.userService.getPurchasesByUserId(id).subscribe(
      data => {
        this.purchases = data;
      }, error => console.log(error)
    );
  }
  
}
