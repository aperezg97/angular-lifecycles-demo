import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { LifecyclesRoutingModule } from './lifecycles-routing.module';
import { LifecyclesParentComponent } from './components/lifecycles-parent/lifecycles-parent.component';
import { LifecyclesChildrenComponent } from './components/lifecycles-children/lifecycles-children.component';
import { LoggerService } from 'src/app/core/services/logger.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LifecyclesLogsComponent } from './lifecycles-logs/lifecycles-logs.component';
import { CommunicationService } from 'src/app/core/services/communication.service';


@NgModule({
  declarations: [
    LifecyclesParentComponent,
    LifecyclesChildrenComponent,
    LifecyclesLogsComponent
  ],
  imports: [
    CommonModule,
    LifecyclesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
  ],
  providers: [
    LoggerService,
    CommunicationService
  ]
})
export class LifecyclesModule { }
