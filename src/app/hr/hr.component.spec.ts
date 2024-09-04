import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrComponent } from './HrComponent';

describe('HrComponent', () => {
  let component: HrComponent;
  let fixture: ComponentFixture<HrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
