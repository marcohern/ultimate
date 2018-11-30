import { RequestServiceBase } from "./request-service-base";
import { HttpHeaders } from "@angular/common/http";

/**
 * Behavior for managing security token
 */
export class TokenServiceBase extends RequestServiceBase {
  
    /**
     * Session Storage Item Name
     */
    private static tokenId:string = 'com.marcohern.ultimate.auth.token';
  
    /**
     * Token Being Stored
     */
    protected token:string = null;

    /**
     * Constructor
     */
    constructor() { 
        super();
    }

    public isAuthenticated():boolean {
        get: {
            return (!(this.token == null));
        }
    }

    /**
     * Save the state to Session Storage
     */
    public saveToken() {
        window.sessionStorage.setItem(TokenServiceBase.tokenId, this.token);
    }

    /**
     * Remove the state to Session Storage
     */
    public deleteToken() {
        window.sessionStorage.removeItem(TokenServiceBase.tokenId);
    }

    /**
     * Retrieve the token from session storage into the state if it exists
     */
    public retrieveToken() {
        var t = window.sessionStorage.getItem(TokenServiceBase.tokenId);
        if (t) {
            this.token = t;
        }
    }

    /**
     * Set the token and save it in Session Storage
     * @param token Token value
     */
    public setToken(token:string) {
        this.token = token;
        this.saveToken();
    }

    /**
     * Clear token from state and session storage
     */
    public clearToken() {
        this.deleteToken();
        this.token = null;
    }

    /**
     * Set headers for a request
     */
    protected headers() {
      let headers = new HttpHeaders();
      headers.set('Content-Type','application/json');
      headers.set('Accept','application/json');
      if (this.token != null) {
        headers.set('Authorization','Bearer ' + this.token);
      }
      return headers;
    }
}
