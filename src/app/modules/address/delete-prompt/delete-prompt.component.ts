import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-prompt',
  templateUrl: './delete-prompt.component.html',
  styleUrls: ['./delete-prompt.component.scss']
})
export class DeletePromptComponent implements OnInit {

  title;
  message;
  action;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.title = this.data.title ? this.data.title : 'Permanently remove this address?';
    this.message = this.data.message ? this.data.message : 'Yes';
    this.action = this.data.action ? this.data.action : 'No';
  }

  ngOnInit(): void {
  }
}
