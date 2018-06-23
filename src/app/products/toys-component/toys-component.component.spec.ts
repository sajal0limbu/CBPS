import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToysComponentComponent } from './toys-component.component';

describe('ToysComponentComponent', () => {
  let component: ToysComponentComponent;
  let fixture: ComponentFixture<ToysComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToysComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToysComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
