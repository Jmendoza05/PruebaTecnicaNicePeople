import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ListarComponent } from './listar/listar.component';

const routes: Routes = [
  {path:'',component:DashboardComponent,children:[
    {path:'', component: ListarComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
