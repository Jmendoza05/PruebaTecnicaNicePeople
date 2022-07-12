import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListarComponent } from './listar/listar.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipe/filter.pipe';
import { PaginatePipe } from './pipe/paginate.pipe';



@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    ListarComponent,
    FilterPipe,
    PaginatePipe,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class DashboardModule { }
