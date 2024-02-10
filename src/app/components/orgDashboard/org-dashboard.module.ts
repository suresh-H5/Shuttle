import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { OrgDashboardComponent } from './org-dashboard.component';
import { OrgDashboardRoutingModule } from './org-dashboard.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OrgDashboardRoutingModule,
    ModalModule.forRoot()
  ],
  declarations: [OrgDashboardComponent],
})
export class OrgDashboardModule {}
