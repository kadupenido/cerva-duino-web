import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FervuraComponent } from './fervura.component';

describe('FervuraComponent', () => {
  let component: FervuraComponent;
  let fixture: ComponentFixture<FervuraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FervuraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FervuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
