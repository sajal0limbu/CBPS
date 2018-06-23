import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothingComponentComponent } from './clothing-component.component';

describe('ClothingComponentComponent', () => {
  let component: ClothingComponentComponent;
  let fixture: ComponentFixture<ClothingComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClothingComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
