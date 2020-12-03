import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurtypeComponent } from './turtype.component';

describe('TurtypeComponent', () => {
  let component: TurtypeComponent;
  let fixture: ComponentFixture<TurtypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurtypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
