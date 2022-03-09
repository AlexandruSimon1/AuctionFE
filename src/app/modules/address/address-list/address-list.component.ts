import { DeletePromptComponent } from './../delete-prompt/delete-prompt.component';
import { AddressService } from './../../../services/address.service';
import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/models/address';
import { AuthenticationService } from 'src/app/security/authentication.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.scss']
})
export class AddressListComponent implements OnInit {
  addresses: Address[];
  constructor(private userService: UserService,
    private authenticationService: AuthenticationService,
    private addressService: AddressService,
    private dialog: MatDialog) { }

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
  deleteAddress(id: number) {
    this.dialog.open(DeletePromptComponent, {
      data: {
        title: 'Permanently remove this address?',
        message: 'No',
        action: this.delete(id)
      }
    });
  }

  delete(id: number) {
    this.addressService.deleteAddressById(id).subscribe(
      data => {
        data;
      }, error => console.log(error)
    );
  }
}
