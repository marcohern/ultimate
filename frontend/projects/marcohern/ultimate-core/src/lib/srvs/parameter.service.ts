import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Parameter } from '../models/parameter';
import { RequestService } from './request.service';
import { SaveResult } from '../models/save-result';

@Injectable({
  providedIn: 'root'
})
export class ParameterService {

  constructor(private req:RequestService) { }

  getAllParameters():Observable<Parameter[]> {
    return this.req.browse<Parameter[]>('/parameters', {});
  }

  getParametersByGroup(group:string): Observable<Parameter[]> {
    return this.req.browse<Parameter[]>('/parameters', {group});
  }

  createParameter(parameter:Parameter): Observable<SaveResult> {
    return this.req.post<SaveResult>('/parameters',parameter);
  }

  updateParameter(parameter:Parameter): Observable<SaveResult> {
    return this.req.put<SaveResult>('/parameters',parameter.id, parameter);
  }

  saveParameter(parameter:Parameter): Observable<SaveResult> {
    if (parameter.id) return this.updateParameter(parameter);
    else return this.createParameter(parameter);
  }

  deleteParameter(id:number): Observable<SaveResult> {
    return this.req.delete<SaveResult>('/parameters', id);
  }
}
