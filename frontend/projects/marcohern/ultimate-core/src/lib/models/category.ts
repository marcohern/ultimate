import { TimedEntity } from "./timed-entity";

export class Category extends TimedEntity {
    name:string = '';
    slug:string = '';
    ord?:number = 0;
    lvl?:number = 0;
}
