import { Observable, throwError } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";

/**
 * Base utility methods for the request service 
 */
export class RequestServiceBase {


    private _requestCount:number = 0;
    private _apiRoot:string = '';
    private _oauthRoot:string = '';

    public setApiRoot(apiRoot:string) {
        this._apiRoot = apiRoot;
    }

    public getApiRoot() {
        return this._apiRoot;
    }

    public setOauthRoot(oauthRoot:string) {
        this._oauthRoot = oauthRoot;
    }

    /**
     * True if there is a request currently running, false otherwise.
     */
    public isRequesting():boolean {
        get: {
            return (this._requestCount > 0);
        }
    };

    public requestCount(): number {
        get: {
            return this._requestCount;
        }
    }

    protected increaseRequestCount() {
        this._requestCount++;
    }

    protected decreaseRequestCount() {
        this._requestCount--;
    }

    /**
     * Generate the fully qualified URL to the API
     * @param endpoint Local Url Endpoint
     */
    protected url(endpoint:string):string {
        return this._apiRoot + endpoint;
    }
  
    /**
     * Generate the fully qualified URL to the OAUTH (Passport)
     * @param endpoint Local Url Endpoint
     */
    protected oauth(endpoint:string):string {
        return this._oauthRoot + endpoint;
    }

    /**
     * Executed when an error occurs during a remote call
     * @param operation Reference to operation being executed
     * @param result Result required
     */
    protected handleError(reference:string, error:any) {
        console.error(reference,error);
    }
    
    /**
     * Executes whenever an a request is complete, regardless of error
     */
    protected completed() {
        //console.log("completed");
        this.decreaseRequestCount();
    }

    /**
     * Executes before a request is about to begin.
     */
    protected beforeBegin() {
        this.increaseRequestCount();
    }
}
