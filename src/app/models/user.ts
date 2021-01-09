import { Purchasing } from './purchasing';
import { Bidding } from './bidding';
import { Address } from './address';
export class User {
    id: number;
    email: string;
    password: string;
    creationDate: Date;
    name: string;
    type: string;
    address: Address;
    bidding: Bidding[];
    purchasing: Purchasing[];

    constructor(id: number,
        email: string,
        password: string,
        creationDate: Date,
        type: string,
        address: Address,
        bidding: Bidding[],
        name: string,
        purchasing: Purchasing[]) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.creationDate = creationDate;
        this.name = name;
        this.type = type;
        this.address = address;
        this.bidding = bidding;
        this.purchasing = purchasing;
    }
}
