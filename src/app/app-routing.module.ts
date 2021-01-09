import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './views/home/home.component'
import {RegisterComponent} from './views/register/register.component';
import {RegisterCreateComponent} from './components/register/register-create/register-create.component';
import {RegisterUpdateComponent} from './components/register/register-update/register-update.component';


const routes: Routes = [
  {
  path: "",
  component: HomeComponent,
  },
  {
    path: "register",
    component: RegisterComponent,
  },
  {
    path: "register/create",
    component: RegisterCreateComponent
  },
  {
    path: "register/update/:id",
    component: RegisterUpdateComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
