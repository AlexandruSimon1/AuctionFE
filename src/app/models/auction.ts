import { Purchasing } from './purchasing';
import { Bidding } from './bidding';
import { Category } from './category';
export class Auction {
    id: number;
    title: string;
    description: string;
    photos: string;
    minimumPrice: number;
    buyNow: number;
    startDate: Date;
    endDate: Date;
    category: Category;
    bidding: Bidding[];
    purchasing: Purchasing;
    constructor(id?: number,
        title?: string,
        description?: string,
        photos?: string,
        minimumPrice?: number,
        buyNow?: number,
        startDate?: Date,
        endDate?: Date,
        category?: Category,
        bidding?: Bidding[],
        purchasing?: Purchasing) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.photos = photos;
        this.minimumPrice = minimumPrice;
        this.buyNow = buyNow;
        this.startDate = startDate;
        this.endDate = endDate;
        this.bidding = bidding;
        this.category = category;
        this.purchasing = purchasing;
    }
}
