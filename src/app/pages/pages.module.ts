import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComponentsModule} from "../component/components.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    RegisterComponent,
    MainComponent,
    LoginComponent
  ],
  imports: [ // Importamos el modulo que queremos
    CommonModule, 
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[], 
  providers:[]
})
export class PagesModule { }
