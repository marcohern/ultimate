import { Injectable } from '@angular/core';
import { RequestService, Category, SaveResult } from '@marcohern/ultimate-core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private req:RequestService) { }

  public browseCategories(params:any = {}): Observable<Category[]> {
    return this.req.browse<Category[]>('/categories',params);
  }

  public getCategory(id:string|number): Observable<Category> {
    return this.req.get<Category>('/categories',id);
  }

  public createCategory(category:Category) : Observable<SaveResult> {
    return this.req.post<SaveResult>('/categories', category);
  }

  public updateCategory(category:Category) : Observable<SaveResult> {
    return this.req.put<SaveResult>('/categories', category.id, category);
  }

  public saveCategory(category:Category) : Observable<SaveResult> {
    return (category.id)
      ? this.createCategory(category)
      : this.updateCategory(category);
  }

  public deleteCategory(id:number) : Observable<SaveResult> {
    return this.req.delete<SaveResult>('/categories', id);
  }
}
