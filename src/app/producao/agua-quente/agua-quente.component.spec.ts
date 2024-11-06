import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AguaQuenteComponent } from './agua-quente.component';

describe('AguaQuenteComponent', () => {
  let component: AguaQuenteComponent;
  let fixture: ComponentFixture<AguaQuenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AguaQuenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AguaQuenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
