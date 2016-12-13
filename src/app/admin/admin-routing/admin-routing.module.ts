import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '../admin.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
// Home路由
const adminRoutes: Routes = [
  { path: '', redirectTo: '/admin', pathMatch: 'full' },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        children: [{
          path: 'dashboard',
          component: DashboardComponent
        }]

      }
    ]
  }];
@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
