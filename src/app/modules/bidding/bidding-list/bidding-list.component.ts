import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Bidding } from 'src/app/models/bidding';

@Component({
  selector: 'app-bidding-list',
  templateUrl: './bidding-list.component.html',
  styleUrls: ['./bidding-list.component.scss']
})
export class BiddingListComponent implements OnInit {
  biddings: Bidding[];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getBiddingsByUserId(1);
  }

  getBiddingsByUserId(id: number) {
    this.userService.getBiddingsByUserId(id).subscribe(
      data => {
        this.biddings = data;
      }, error => console.log(error)
    );
  }

}
