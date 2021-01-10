import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SouvenirspanelComponent } from './souvenirspanel.component';

describe('SouvenirspanelComponent', () => {
  let component: SouvenirspanelComponent;
  let fixture: ComponentFixture<SouvenirspanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SouvenirspanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SouvenirspanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
