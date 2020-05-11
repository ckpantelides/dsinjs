import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructDetailsComponent } from './struct-details.component';

describe('StructDetailsComponent', () => {
  let component: StructDetailsComponent;
  let fixture: ComponentFixture<StructDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
