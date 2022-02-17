import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-bidding-prompt',
  templateUrl: './bidding-prompt.component.html',
  styleUrls: ['./bidding-prompt.component.scss']
})
export class BiddingPromptComponent implements OnInit {

  title;
  message;
  action = 'Ok';

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.title = this.data.title ? this.data.title : 'Problem with bid';
    this.message = this.data.message ? this.data.message : 'Your bid is the same as or more than the Buy It Now price. You can save time and money by buying it now';
    this.action = this.data.action ? this.data.action : 'Ok';
  }

  ngOnInit(): void {
  }

}
