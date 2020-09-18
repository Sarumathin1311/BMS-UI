import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MutualFundAccountComponent } from './mutualfundaccount.component';

describe('MutualFundAccountComponent', () => {
  let component: MutualFundAccountComponent;
  let fixture: ComponentFixture<MutualFundAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MutualFundAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MutualFundAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
