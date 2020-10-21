import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenmuseumComponent } from './renmuseum.component';

describe('RenmuseumComponent', () => {
  let component: RenmuseumComponent;
  let fixture: ComponentFixture<RenmuseumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenmuseumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenmuseumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
