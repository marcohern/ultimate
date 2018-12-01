import { TimedEntity } from "./timed-entity";

export class Product extends TimedEntity {
    name:string;
    slug:string;
    active?:boolean;
    description?:string;
    org_price?:number;
    dct_price?:number;
    
}
