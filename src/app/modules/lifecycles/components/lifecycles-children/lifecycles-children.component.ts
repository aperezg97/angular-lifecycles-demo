/* eslint-disable @angular-eslint/no-conflicting-lifecycle */
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { CommunicationService } from 'src/app/core/services/communication.service';
import { LoggerService } from 'src/app/core/services/logger.service';
import { DummyModel } from '../../models/dummy-model';

@Component({
  selector: 'app-lifecycles-children',
  templateUrl: './lifecycles-children.component.html',
  styleUrls: ['./lifecycles-children.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LifecyclesChildrenComponent implements
OnChanges, OnInit, DoCheck,
AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked,
  OnDestroy {

  @Input() myModel!: DummyModel;

  nextId = 1;
  verb = 'inicializado';

  constructor(
    private logger: LoggerService,
    private cdr: ChangeDetectorRef,
    private communicationService: CommunicationService,
  ) {
    this.logIt(`${this.constructor.name} constructor!`);
    const is = this.myModel?.name ? 'tiene' : 'no tiene';
    this.logIt(`La variable nombre ${is} valor en el constructor`);
    this.communicationService.observable.subscribe((value: string) => {
      if (!this.myModel) {
        return;
      }
      this.myModel.name = value;
      this.cdr.detectChanges();
    })
  }

  ngOnInit() {
    this.logIt('OnInit');
  }

  // only called for/if there is an @input variable set by parent.
  ngOnChanges(changes: SimpleChanges) {
    const changesMsgs: string[] = [];
    console.log({changes});
    for (const propName in changes) {
      if (propName === 'myModel') {
        const name = changes['myModel'].currentValue;
        changesMsgs.push(`modelo ${this.verb} a "${JSON.stringify(name)}"`);
      } else {
        changesMsgs.push(propName + ' ' + this.verb);
      }
    }
    this.logIt(`OnChanges: ${changesMsgs.join('; ')}`);
    this.verb = 'cambió'; // next time it will be a change
    // this.cdr.detectChanges();
  }

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngDoCheck() {
    // this.logIt('DoCheck');
  }

  ngAfterContentInit() { this.logIt('AfterContentInit');  }

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngAfterContentChecked() {
    // this.logIt('AfterContentChecked');
  }

  ngAfterViewInit() { this.logIt('AfterViewInit'); }

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngAfterViewChecked() {
    // this.logIt('AfterViewChecked');
  }

  ngOnDestroy() { this.logIt('OnDestroy'); }

  logIt(msg: string) {
    this.logger.log(`#${this.nextId++} ${msg}`);
  }

  get test(): string {
    this.logIt('Entra');
    return 'TEST';
  }
}
