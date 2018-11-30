import { RequestServiceBase } from "./request-service-base";
import { HttpHeaders } from "@angular/common/http";

export class TokenServiceBase extends RequestServiceBase {
  
    private static tokenId:string = 'com.marcohern.ultimate.auth.token';
  
    protected token:string = null;

    constructor() { 
        super();
      }

    public setToken(token:string) {
        window.sessionStorage.setItem(TokenServiceBase.tokenId, token);
        this.token = token;
    }

    public clearToken() {
        window.sessionStorage.removeItem(TokenServiceBase.tokenId);
        this.token = null;
    }

    public retrieveToken() {
        var t = window.sessionStorage.getItem(TokenServiceBase.tokenId);
        if (t) {
            this.token = t;
        }
    }

    public saveToken() {
        window.sessionStorage.setItem(TokenServiceBase.tokenId, this.token);
    }

    public deleteToken() {
        window.sessionStorage.removeItem(TokenServiceBase.tokenId);
    }

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
