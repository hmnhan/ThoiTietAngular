import { Component, NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/weather/dashboard/dashboard.component';

// @Component({
//   selector: 'app-routing',
//   templateUrl: './routing.component.html',
//   styleUrls: ['./routing.component.css']
// })
const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent }
]

@NgModule({
  imports: [
      RouterModule.forRoot(routes)  
  ],
  exports: [
      RouterModule
  ]
})

export class RoutingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
