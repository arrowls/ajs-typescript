import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }
    //-------------------------
    getWholeAmmount(): number {
        return this.items.reduce((total, current) => total += current.price, 0)
    }
    getDiscountedAmmount(discount: number): number {
        return this.getWholeAmmount() * (1 - discount / 100);
    }
}