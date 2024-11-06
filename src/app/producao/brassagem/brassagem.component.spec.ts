import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrassagemComponent } from './brassagem.component';

describe('BrassagemComponent', () => {
  let component: BrassagemComponent;
  let fixture: ComponentFixture<BrassagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrassagemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrassagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
