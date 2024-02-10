import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SideNavComponent } from './navigation/side-nav/side-nav.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./components/orgDashboard/org-dashboard.module').then((m) => m.OrgDashboardModule),
  },
  {
    path: 'design',
    component:SideNavComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
