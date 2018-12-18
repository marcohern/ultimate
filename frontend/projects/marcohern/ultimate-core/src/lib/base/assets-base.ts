
import { AssetsService } from "../srvs/assets.service";

/**
 * Contains mathods that assist in finding the correct assets folder.
 */
export class AssetsBase {

    constructor(protected ass:AssetsService) {

    }
    /**
     * Retrieves soft filepath to a file in the assets folder 
     * 
     * @param uri file path from within the assets/ folder
     */
    public assets(uri:string):string {
        return this.ass.assets(uri);
    }
}