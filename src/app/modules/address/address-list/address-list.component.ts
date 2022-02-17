import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/models/address';
import { AuthenticationService } from 'src/app/security/authentication.service';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.scss']
})
export class AddressListComponent implements OnInit {
  addresses: Address[];
  constructor(private userService: UserService
    , private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    let currentUser = this.authenticationService.currentUserValue;
    this.getAddressByUserId(currentUser?.id);
  }

  getAddressByUserId(id: number) {
    this.userService.getAddressesByUserId(id).subscribe(
      data => {
        this.addresses = data;
      }, error => console.log(error)
    );
  }

}
