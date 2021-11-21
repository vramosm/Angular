import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {RegisterComponent} from "./pages/register/register.component";
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: 'login',
    component: LoginComponent,
    
  },
  {
    path: 'register',
    component: RegisterComponent
    
  },
  {
    path: 'main',
    component: MainComponent
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
