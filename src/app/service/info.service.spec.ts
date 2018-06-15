import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

describe('InfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InfoService]
    });
  });

  it('should be created', inject([InfoService], (service: InfoService) => {
    expect(service).toBeTruthy();
  }));
});
