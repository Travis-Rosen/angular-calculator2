/*
-Travis Rosen
-07/09/2022
-app.routing-module.ts
-Routes for application
*/


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CalcProblemDetailsComponent } from './pages/calc-problem-details/calc-problem-details.component';
import { CalcProblemCreateComponent } from './pages/calc-problem-create/calc-problem-create.component';


const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'calculator/:id',
        component: CalcProblemDetailsComponent
      },
      {
        path: 'create/new',
        component: CalcProblemCreateComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
