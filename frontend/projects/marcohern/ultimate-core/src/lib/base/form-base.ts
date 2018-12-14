import { FormGroup } from "@angular/forms";
import { Output, EventEmitter } from "@angular/core";
import { Observable } from 'rxjs';

/**
 * Form Base.
 * Base behavior for form component. A form component is a component that
 * is a form (is encapsulated in <form> tags)
 */
export abstract class FormBase {

    private _loading:boolean = false;
    private _editing:boolean = false;

    /**
     * Form Group.
     * Must be built buy the base
     */
    public group:FormGroup;


    /**
     * loading helper. the intention is that,
     * if its true, the form is in a loading state, which usually
     * means that all fields are disabled (cant edit while it loads data) 
     */
    public loading() {
        get: {
            return this._loading;
        }
    }

    /**
     * Editing helper. If true, the form is editing an existing record.
     * if false, the form will be creating a new record
     */
    public editing() {
        get: {
            return this._editing;
        }
    }

    /**
     * 
     */
    public creating() {
        get: {
            return !this._editing;
        }
    }
  
    /**
     * Emitted when a cancel button is pressed
     */
    @Output()
    public canceled:EventEmitter<any> = new EventEmitter();

    /**
     * Called when the form validation is valid
     */
    public abstract saving($event:any, values:any[]);

    /**
     * Called when the submit button is clicked
     */
    public submit($event) {
        if (this.group.valid) {
            this.saving($event, this.group.value);
        } else {
            console.error(this.group);
        }
    }

    public fill<T>(obs:Observable<T>, callback:Function) {
        this._editing = true;
        this._loading = true;
        obs.subscribe(result => {
            callback(result);
            this._loading = false;
        }, error => {
            this.handleLoadError(error);
        });
    }

    /**
     * Called when the cancel button is clicked
     */
    public cancel() {
        this.canceled.emit();
    }

    /**
     * Form Error handler
     * @param error 
     */
    public handleLoadError(error) {
        this._loading = false;
    }
    
    /**
     * Disabled helper
     * use it to disable inputs while loading
     */
    public disable():any {
        return this._loading ? '' : null; 
    }

    /**
     * Disable submit button
     * use to disable the submit button if data is invalid
     */
    public disabelSubmit() {
        return (this._loading || !this.group.valid) ? '' : null;
    }
}
