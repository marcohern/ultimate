import { TokenServiceBase } from "./token-service-base";

export class QueryStringBase extends TokenServiceBase {

    public constructor() {
        super();
    }

    protected getQueryString(object:any) {
        var qs:string = '';
        var i = 0;
        for (let key in object) {
        if (i>0) qs += '&';
        qs += key + '=' + encodeURI(object[key]);
        i++;
        }
        return qs;
    }
}
