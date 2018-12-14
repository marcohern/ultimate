import { Checkbox } from "./checkbox";

export class CheckboxChanged {
    
    added:Checkbox[] = null;
    removed:Checkbox[] = null;
    noneSelected:boolean = true;

    constructor() {
        this.added = [];
        this.removed = [];
        this.noneSelected = true;
    }
}
