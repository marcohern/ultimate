import { Observable, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { HttpHeaders, HttpClient, HttpErrorResponse } from "@angular/common/http";

export class RequestServiceBase {
    public requesting:boolean = false;

    protected url(endpoint:string):string {
        return environment.api.root + endpoint;
    }
  
    protected oauth(endpoint:string):string {
        return environment.api.oauth + endpoint;
    }
  
    protected updateRequesting(value:boolean) {
      this.requesting = value;
    }

    protected handleError<T>(operation:string = 'operation', result?: T) {
        return (err:HttpErrorResponse): Observable<T> => {
            console.error(err);
            if (err.status == 401) {
            console.warn("Unauthenticated... maybe redirect here?");
            }
            return throwError(err.message);
        }
    }
    
    protected completed() {
        this.updateRequesting(false);
    }
}
