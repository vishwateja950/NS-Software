import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VishwaComponent } from './vishwa.component';

describe('VishwaComponent', () => {
  let component: VishwaComponent;
  let fixture: ComponentFixture<VishwaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VishwaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VishwaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
