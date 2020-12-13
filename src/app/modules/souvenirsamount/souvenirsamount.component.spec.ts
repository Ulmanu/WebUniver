import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SouvenirsamountComponent } from './souvenirsamount.component';

describe('SouvenirsamountComponent', () => {
  let component: SouvenirsamountComponent;
  let fixture: ComponentFixture<SouvenirsamountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SouvenirsamountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SouvenirsamountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
