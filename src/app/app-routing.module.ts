import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimersComponent } from './timers/timers.component'
const routes: Routes = [
  {
    path:'timers',
    component:TimersComponent
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/timers'
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
