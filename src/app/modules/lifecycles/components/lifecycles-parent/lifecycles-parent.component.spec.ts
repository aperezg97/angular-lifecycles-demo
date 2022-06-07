import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecyclesParentComponent } from './lifecycles-parent.component';

describe('LifecyclesParentComponent', () => {
  let component: LifecyclesParentComponent;
  let fixture: ComponentFixture<LifecyclesParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifecyclesParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifecyclesParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
