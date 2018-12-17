import { environment } from "src/environments/environment";

export class AssetsBase {

    public assets(uri:string):string {
        return environment.assets + uri;
    }
}
