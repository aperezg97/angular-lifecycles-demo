import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { LoggerService } from 'src/app/core/services/logger.service';
import { DummyModel } from '../../models/dummy-model';

@Component({
  selector: 'app-lifecycles-parent',
  templateUrl: './lifecycles-parent.component.html',
  styleUrls: ['./lifecycles-parent.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LifecyclesParentComponent {

  childrenIsVisible = true;

  myModel!: DummyModel;

  form!: FormGroup;

  constructor(
    private logger: LoggerService,
    private fb: FormBuilder,
  ) {
    this.logger = logger;
    this.myModel = {
      name: 'Chase',
    };
    this.form = this.fb.group({
      name: new FormControl(this.myModel.name, [])
    });
    this.form.valueChanges.subscribe((value) => {
      this.myModel = value;
      // this.myModel.name = value.name;
    })
  }

  toggleChildrenVisibility() {
    this.childrenIsVisible = !this.childrenIsVisible;
    if (this.childrenIsVisible) {
      this.clearLogs(); // clear log on create
    }
    this.logger.tick();
  }

  clearLogs() {
    this.logger.clear();
    this.logger.tick();
  }
}
