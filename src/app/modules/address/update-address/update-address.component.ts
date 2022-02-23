import { AddressService } from './../../../services/address.service';
import { Address } from './../../../models/address';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update-address',
  templateUrl: './update-address.component.html',
  styleUrls: ['./update-address.component.scss']
})
export class UpdateAddressComponent implements OnInit {
  address: Address = new Address();
  returnUrl: string;
  submitted = false;

  constructor(private addressService: AddressService,
    private activatedRoute: ActivatedRoute,
    private router: Router,) {
    if (this.submitted === true) {
      this.router.navigate(['user/address']);
    }
  }

  ngOnInit(): void {
    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || 'user/address';
  }

  submitAddress() {
    this.addressService.getAddressById(this.activatedRoute.snapshot.params.id).subscribe(
      data => {
        data.address = this.address.address;
        data.city = this.address.city;
        data.province = this.address.province;
        this.addressService.updateAddressById(this.activatedRoute.snapshot.params.id, data).subscribe(
          data => {
            this.submitted = true;
            this.router.navigate([this.returnUrl]);
          },
          error => {
            return Observable.throw(error);
          }
        );
      },
      error => console.log(error)
    );
  }
}
