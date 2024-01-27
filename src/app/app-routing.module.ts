import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LnadingPageComponent } from './app/components/lnading-page/lnading-page.component';
import { DashboardComponent } from './app/components/dashboard/dashboard.component';
const routes: Routes = [
  { path: 'home', component: LnadingPageComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
