import {Router} from "@angular/router";
import { Component, OnInit } from '@angular/core';
import { LoginService } from "src/app/services/login.service";



@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ['./login.component.css'],
    providers: [ ]
})

export class LoginComponent implements OnInit{



    constructor(
        private loginSrv: LoginService,
        private router: Router){

    }

    ngOnInit(): void {
     
    }
   
    enviarRegistro():void{
        this.loginSrv.enviarMensaje();
        this.router.navigate(['/register']);  
  
    }

}

