import { DetailsComponent } from './weather/details/details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './weather/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'detail', component: DetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
