import { Category } from "./category";

export class Product {
       id:number;
       name: string;
       description: string;
       stock: number;
       price: number;
       category: Category;
       imageURL: string;
       creationDate:number;
       updateProductDate:number;
}
