import { Auction } from './auction';
export class Category {
    id: number;
    name: string;
    description: string;
    auction: Auction[];
    
    constructor(id: number,
        name: string,
        description: string,
        auction: Auction[]) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.auction = auction;
    }
}
