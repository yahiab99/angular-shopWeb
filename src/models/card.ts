export class Card { 
    image: string;
    name: string;
    price: string;
    productID: string;

    constructor(name: string,image: string,price: string, productID: string) {
        this.name = name;
        this.image = image;
        this.price = price;
        this.productID = productID;
    }



}