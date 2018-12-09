import { Checkbox } from "./checkbox";

export class CheckboxChanged {
    constructor() {
        this.added = [];
        this.removed = [];
    }
    added:Checkbox[] = null;
    removed:Checkbox[] = null;
}
