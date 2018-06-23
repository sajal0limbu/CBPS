import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoesComponentComponent } from './shoes-component.component';

describe('ShoesComponentComponent', () => {
  let component: ShoesComponentComponent;
  let fixture: ComponentFixture<ShoesComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoesComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
