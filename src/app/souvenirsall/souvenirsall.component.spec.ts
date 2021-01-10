import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SouvenirsallComponent } from './souvenirsall.component';

describe('SouvenirsallComponent', () => {
  let component: SouvenirsallComponent;
  let fixture: ComponentFixture<SouvenirsallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SouvenirsallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SouvenirsallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
