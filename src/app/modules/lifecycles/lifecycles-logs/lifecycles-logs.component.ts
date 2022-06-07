import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/core/services/communication.service';
import { LoggerService } from 'src/app/core/services/logger.service';
import { DummyModel } from '../models/dummy-model';

@Component({
  selector: 'app-lifecycles-logs',
  templateUrl: './lifecycles-logs.component.html',
  styleUrls: ['./lifecycles-logs.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LifecyclesLogsComponent {

  @Input() myModel!: DummyModel;

  hookLog: string[] = [];

  constructor(
    private logger: LoggerService,
    private communicationService: CommunicationService,
  ) {
    this.logger = logger;
    this.hookLog = logger.logs;
  }

  sendData() {
    this.communicationService.push('New');
  }

  clearLogs() {
    this.logger.clear();
    this.logger.tick();
  }
}
