import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssetsService {
  private _assetsDir:string = '';

  constructor() { }
  
  /**
   * Set the assets directory
   * 
   * @param uri absolute path to assets
   */
  public setAssetsDir(uri:string) {
    this._assetsDir = uri;
  }

  /**
   * Retrieves soft filepath to a file in the assets folder 
   * 
   * @param uri file path from within the assets/ folder
   */
  public assets(uri:string):string {
    return this._assetsDir + uri;
  }
}
