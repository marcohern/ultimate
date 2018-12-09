import { TimedEntity } from "./timed-entity";
import { Category } from "./category";

export class Product extends TimedEntity {
    name:string;
    slug:string;
    active?:boolean;
    overview?:string;
    description?:string;
    org_price?:number;
    dct_price?:number;
    categories?:Category[];
    add_categories?:number[] = [];
    del_categories?:number[] = [];
    image_bucket?:string;
    images?:string[] = [];

    delete?:boolean = false;
}
