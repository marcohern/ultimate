import { Input, Output, EventEmitter } from "@angular/core";
import { AssetsBase } from "../base/assets-base";

export class RowBase<T> extends AssetsBase {
    @Input()
    index:number;

    @Input()
    editRoute:any[];

    @Input()
    object:T;

    @Output()
    deleting:EventEmitter<T> = new EventEmitter();

    public pushId(id:any) {
        this.editRoute.push(id);
    }

    public deleteCLic() {
        this.deleting.emit(this.object);
    }
}
