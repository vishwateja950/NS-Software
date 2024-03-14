import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LkoComponent } from './lko.component';

describe('LkoComponent', () => {
  let component: LkoComponent;
  let fixture: ComponentFixture<LkoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LkoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LkoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
