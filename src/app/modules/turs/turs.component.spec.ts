import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TursComponent } from './turs.component';

describe('TursComponent', () => {
  let component: TursComponent;
  let fixture: ComponentFixture<TursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
