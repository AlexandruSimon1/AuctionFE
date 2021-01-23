export class Address {
    id: number;
    province: string;
    city: string;
    address: string;

    constructor(id: number, province: string, city: string, address: string) {
        this.id = id;
        this.province = province;
        this.city = city;
        this.address = address;
    }
}
