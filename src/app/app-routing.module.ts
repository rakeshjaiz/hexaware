import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './container/dashboard/dashboard.component';



const routes: Routes = [
  { path: 'dashborad', component: DashboardComponent },
  { path: '',   redirectTo: '/dashborad', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
