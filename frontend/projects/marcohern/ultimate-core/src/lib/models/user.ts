import { TimedEntity } from "./timed-entity";

export class User extends TimedEntity {
    email:string;
    name:string;
    verified?:boolean = false;
    scope?:string[] = [];
    
}
