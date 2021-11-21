import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() {
  }

  enviarMensaje(): void {
    console.log('Redireccionando a registro....')
    console.log('Calculando....')
    console.log("Bienvenido al registro")
  }

  enviarInicio(): void {
    console.log('Redireccionando a inicio....')
    console.log("Bienvenido de nuevo")
  }

}
