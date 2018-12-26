import { TestBed, async } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ParameterService } from './parameter.service';
import { of } from 'rxjs/observable/of';
import { Parameter, RequestService } from '@marcohern/ultimate-core';


describe('ParameterService', () => {
  let param1:Parameter = {
    id:1 ,
    name: 'param1',
    group: 'group',
    value: 'value'
  };
  let service: ParameterService;
  let httpMock: HttpTestingController;
  let pss:any;
  
  beforeEach(() => {
    pss = {
      get: () => of([param1]),
    };

    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [
        ParameterService,
        {provide: RequestService, useValue: pss}
      ]
    });

    service = TestBed.get(ParameterService);
    httpMock = TestBed.get(httpMock);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get parameter', () => {
    service.getAllParameters().subscribe(result => {
      expect(result.length).toBe(1);
    });

    const request = httpMock.expectOne('/parameters');
  });
});
