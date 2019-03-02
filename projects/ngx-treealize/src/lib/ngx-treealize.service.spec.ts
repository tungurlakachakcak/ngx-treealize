import { TestBed } from '@angular/core/testing';

import { NgxTreealizeService } from './ngx-treealize.service';

describe('NgxTreealizeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxTreealizeService = TestBed.get(NgxTreealizeService);
    expect(service).toBeTruthy();
  });
});
