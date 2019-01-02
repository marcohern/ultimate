import { TimedEntity } from "./timed-entity";

export class Content extends TimedEntity {
    reference:string;
    lang:string;
    type:string;
    group:string;
    ord:number;
    content?:string;
    draft?:string;
    hits:number;
    clicks:number;
}
