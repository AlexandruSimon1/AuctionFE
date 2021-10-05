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
}
