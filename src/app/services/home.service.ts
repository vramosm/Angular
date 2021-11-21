import {Injectable} from '@angular/core';
import {ContactForm} from "../model/contact-form";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() {
  }

  enviarMensaje(contacto: ContactForm): void {
    console.log('Enviando formulario....')
    console.log("Obteniendo datos....")
    console.log(JSON.stringify(contacto));
    console.log('Formulario enviado')
  }

}
