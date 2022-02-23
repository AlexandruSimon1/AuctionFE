import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Address } from 'src/app/models/address';
import { User } from 'src/app/models/user';
import { AddressService } from 'src/app/services/address.service';
import { AuthenticationService } from 'src/app/security/authentication.service';

@Component({
  selector: 'app-create-address',
  templateUrl: './create-address.component.html',
  styleUrls: ['./create-address.component.scss']
})
export class CreateAddressComponent implements OnInit {
  address: Address = new Address();
  user: User = new User();
  addresses: Address[];
  returnUrl: string;
  submitted = false;
  constructor(private userService: UserService,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router,) {
    if (this.submitted === true) {
      this.router.navigate(['user/address']);
    }
  }

  ngOnInit(): void {
    let currentUser = this.authenticationService.currentUserValue;
    this.getUser(currentUser.id);
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'user/address';
  }
  getUser(id: number) {
    this.userService.getUserById(id).subscribe(
      data => {
        this.user = data;
      },
      error => console.log(error)
    );
  }

  submitAddress() {
    this.addresses = this.user.addresses;
    this.addresses.push(this.address);
    this.user.addresses = this.addresses;
    this.userService.updateUserById(this.user.id, this.user).subscribe(
      data => {
        this.submitted = true;
        this.router.navigate([this.returnUrl]);
      },
      error => console.log(error)
    );
  }

}
