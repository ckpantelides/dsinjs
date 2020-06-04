import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LefthandNavComponent } from './lefthand-nav.component';

describe('LefthandNavComponent', () => {
  let component: LefthandNavComponent;
  let fixture: ComponentFixture<LefthandNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LefthandNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LefthandNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
