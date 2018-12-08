import { FormGroup } from "@angular/forms";
import { Output, EventEmitter } from "@angular/core";

/**
 * Form Base.
 * Base behavior for form component. A form component is a component that
 * is a form (is encapsulated in <form> tags)
 */
export abstract class FormBase {

    /**
     * Form Group.
     * Must be built buy the base
     */
    protected group:FormGroup;

    /**
     * loading helper. the intention is that,
     * if its true, the form is in a loading state, which usually
     * means that all fields are disabled (cant edit while it loads data) 
     */
    protected loading:boolean = false;
  
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
        }
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
        this.loading = false;
    }
    
    /**
     * Disabled helper
     * use it to disable inputs while loading
     */
    public disable():any {
        return this.loading ? '' : null; 
    }
}
