import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusformComponent } from './musform.component';

describe('MusformComponent', () => {
  let component: MusformComponent;
  let fixture: ComponentFixture<MusformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
