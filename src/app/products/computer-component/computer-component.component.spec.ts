import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerComponentComponent } from './computer-component.component';

describe('ComputerComponentComponent', () => {
  let component: ComputerComponentComponent;
  let fixture: ComponentFixture<ComputerComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputerComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
