import { Purchasing } from './../../../models/purchasing';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AuthenticationService } from 'src/app/security/authentication.service';

@Component({
  selector: 'app-purchasing-list',
  templateUrl: './purchasing-list.component.html',
  styleUrls: ['./purchasing-list.component.scss']
})
export class PurchasingListComponent implements OnInit {
  purchases : Purchasing[];
  constructor(private userService: UserService,
    private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    let currentUser = this.authenticationService.currentUserValue;
    this.getPurchasesByUserId(currentUser.id);
  }

  getPurchasesByUserId(id: number) {
    this.userService.getPurchasesByUserId(id).subscribe(
      data => {
        this.purchases = data;
      }, error => console.log(error)
    );
  }
  
}
