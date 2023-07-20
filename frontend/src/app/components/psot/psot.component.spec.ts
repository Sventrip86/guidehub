import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsotComponent } from './psot.component';

describe('PsotComponent', () => {
  let component: PsotComponent;
  let fixture: ComponentFixture<PsotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PsotComponent]
    });
    fixture = TestBed.createComponent(PsotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
