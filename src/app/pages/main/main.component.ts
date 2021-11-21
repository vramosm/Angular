import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-home',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
        private loginSrv: LoginService,
        private router: Router){
  }



  ngOnInit(): void {
  }

  enviarLogin():void{
    this.loginSrv.enviarInicio();
    this.router.navigate(['/login']);  

}

}
