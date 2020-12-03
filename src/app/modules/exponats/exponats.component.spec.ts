import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExponatsComponent } from './exponats.component';

describe('ExponatsComponent', () => {
  let component: ExponatsComponent;
  let fixture: ComponentFixture<ExponatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExponatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExponatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
