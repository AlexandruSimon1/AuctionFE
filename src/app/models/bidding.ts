import { User } from './user';
import { Auction } from './auction';
export class Bidding {
    id: number;
    auction: Auction;
    user: User;
    constructor(id: number,
        auction: Auction,
        user: User) {
        this.id = id;
        this.auction = auction;
        this.user = user;
    }
}
