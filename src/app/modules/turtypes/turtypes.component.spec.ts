import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurtypesComponent } from './turtypes.component';

describe('TurtypesComponent', () => {
  let component: TurtypesComponent;
  let fixture: ComponentFixture<TurtypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurtypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurtypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
