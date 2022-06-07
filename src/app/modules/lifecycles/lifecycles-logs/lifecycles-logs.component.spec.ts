import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecyclesLogsComponent } from './lifecycles-logs.component';

describe('LifecyclesLogsComponent', () => {
  let component: LifecyclesLogsComponent;
  let fixture: ComponentFixture<LifecyclesLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifecyclesLogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifecyclesLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
