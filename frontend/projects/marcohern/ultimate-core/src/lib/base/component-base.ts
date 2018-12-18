import { AssetsBase } from "./assets-base";
import { AssetsService } from "../srvs/assets.service";

/**
 * Combonent Base
 * Behavior for components. Contains some usefull methods
 */
export class ComponentBase extends AssetsBase {

    public constructor(ass:AssetsService) {
        super(ass);
    }
}
