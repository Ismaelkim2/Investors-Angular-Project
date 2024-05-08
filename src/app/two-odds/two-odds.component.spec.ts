import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoOddsComponent } from './two-odds.component';

describe('TwoOddsComponent', () => {
  let component: TwoOddsComponent;
  let fixture: ComponentFixture<TwoOddsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoOddsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoOddsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
