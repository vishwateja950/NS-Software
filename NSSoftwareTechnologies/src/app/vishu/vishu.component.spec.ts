import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VishuComponent } from './vishu.component';

describe('VishuComponent', () => {
  let component: VishuComponent;
  let fixture: ComponentFixture<VishuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VishuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VishuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
