import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/models/address';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.scss']
})
export class AddressListComponent implements OnInit {
  addresses: Address[];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAddressByUserId(1);
  }

  getAddressByUserId(id: number) {
    this.userService.getAddressesByUserId(id).subscribe(
      data => {
        this.addresses = data;
      }, error => console.log(error)
    );
  }

}
