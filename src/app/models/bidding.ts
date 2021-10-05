import { User } from './user';
import { Auction } from './auction';
export class Bidding {
    id: number;
    auction: Auction;
    user: User;
}
