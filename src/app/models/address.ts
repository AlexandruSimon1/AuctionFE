export class Address {
    id: number;
    province: string;
    city: string;
    address: string;
    document: string;

    constructor(id: number, province: string, city: string, address: string,document: string) {
        this.id = id;
        this.province = province;
        this.city = city;
        this.address = address;
        this.document = document;
    }
}
