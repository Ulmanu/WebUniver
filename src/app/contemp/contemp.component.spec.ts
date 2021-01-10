import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContempComponent } from './contemp.component';

describe('ContempComponent', () => {
  let component: ContempComponent;
  let fixture: ComponentFixture<ContempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
