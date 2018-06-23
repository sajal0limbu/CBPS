import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationColumnComponent } from './recommendation-column.component';

describe('RecommendationColumnComponent', () => {
  let component: RecommendationColumnComponent;
  let fixture: ComponentFixture<RecommendationColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendationColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendationColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
