import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecyclesChildrenComponent } from './lifecycles-children.component';

describe('LifecyclesChildrenComponent', () => {
  let component: LifecyclesChildrenComponent;
  let fixture: ComponentFixture<LifecyclesChildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifecyclesChildrenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifecyclesChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
