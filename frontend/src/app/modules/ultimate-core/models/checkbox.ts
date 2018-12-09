import { CheckboxChanged } from "./checkbox-changed";

export class Checkbox {

    constructor(label:string, value:any, checked:boolean, source:any) {
        this.label = label;
        this.value = value;
        this.checked = checked;
        this.source = source;
        this.status = null;
        this.parent = null;
    }

    label:string = '';
    value:any = '';
    checked:boolean = false;
    source?:any = null;
    status?:string = null;
    parent:CheckboxChanged = null;
}
