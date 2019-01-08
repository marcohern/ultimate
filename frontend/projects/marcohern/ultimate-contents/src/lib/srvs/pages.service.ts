import { Injectable } from '@angular/core';

import { RequestService, Paged, Content, SaveResult } from '@marcohern/ultimate-core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  constructor(private req:RequestService) { }

  public browsePages(query:any = {}):Observable<Paged<Content>> {
    return this.req.browse<Paged<Content>>('/contents', query);
  }

  public getPage(id:string|number): Observable<Content> {
    return this.req.get<Content>('/contents',id);
  }

  public createPage(content:Content) : Observable<SaveResult> {
    return this.req.post<SaveResult>('/contents', content);
  }

  public updatePage(content:Content) : Observable<SaveResult> {
    return this.req.put<SaveResult>('/contents', content.id, content);
  }

  public savePage(content:Content): Observable<SaveResult> {
    return (content.id)
      ? this.updatePage(content)
      : this.createPage(content);
  }

  public deletePage(id:number) : Observable<SaveResult> {
    return this.req.delete('/contents', id);
  }
}
