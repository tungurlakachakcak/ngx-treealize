import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTreealizeComponent } from './ngx-treealize.component';

describe('NgxTreealizeComponent', () => {
  let component: NgxTreealizeComponent;
  let fixture: ComponentFixture<NgxTreealizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxTreealizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTreealizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
