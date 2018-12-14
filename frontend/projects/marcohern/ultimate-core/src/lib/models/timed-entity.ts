import { Entity } from "./entity";

export class TimedEntity extends Entity {
    created?:Date;
    updated?:Date;
}
