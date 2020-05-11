import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructListComponent } from './struct-list.component';

describe('StructListComponent', () => {
  let component: StructListComponent;
  let fixture: ComponentFixture<StructListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
