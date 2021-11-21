import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ContactForm} from "../../model/contact-form";
import {HomeService} from "../../services/home.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public nombre!: string;
  public apellido!: string;
  public telefono!: number;
  public email!: string;
  public direccion!: string;
  public localidad!: string;
  public provincia!: string;
  public contraseña!: string;
  public passValid!: string;
  public condiciones!: boolean;

  nuevoPass: string = "";
  repeatPass: string = "";
  passIguales: boolean = false;

  constructor(private fb: FormBuilder,
              private homeSrv: HomeService,
              private router: Router) {

                
  }

  // Declaro el formulario y sus validaciones
  formularioContacto = this.fb.group({
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    telefono: ['', Validators.required],
    email: ['',  Validators.compose([Validators.email, Validators.required])],
    direccion: ['' ],
    localidad: [''],
    provincia: [''],
    contraseña: ['', Validators.required],
    passValid: ['', Validators.required],
    condiciones: ['', Validators.required]
  },
  { // Otras opciones del formulario
    validators: this.validadorContraseña
  });

  ngOnInit(): void {
  }

  // Se comprueba que la contraseña sea la misma. Si no coincide te avisa el formulario
  comprobarPass(): boolean {
    if(this.nuevoPass != this.repeatPass || this.repeatPass.length < 5){
      this.passIguales = false;
    }
    else{
      this.passIguales = true;
    }
    return this.passIguales;
  }

  enviarFormulario(): void {
  
    

    // Convierto a objeto.
    let value: ContactForm = new ContactForm(
      this.formularioContacto.value.nombre,
      this.formularioContacto.value.apellido,
      this.formularioContacto.value.telefono,
      this.formularioContacto.value.email,
      this.formularioContacto.value.direccion,
      this.formularioContacto.value.localidad,
      this.formularioContacto.value.provincia,
      this.formularioContacto.value.contraseña,
      this.formularioContacto.value.passValid,
      this.formularioContacto.value.condiciones);

    // Envio el mensaje para comprobar que datos se han rellenado
    this.homeSrv.enviarMensaje(value);

    // Redirigo al main
    this.router.navigate(['/main']);
  }

  //Se valida la contraseña para que sea la misma. Si no coincide no te deja avanzar
  validadorContraseña(frm: FormGroup) {
    let contraseñaInicial = frm?.get('contraseña')?.value;
    let contraseñaRepetida = frm?.get('passValid')?.value;
    let esValido = contraseñaInicial === contraseñaRepetida;

    let coincidenContraseñas = esValido ? null : {'invalid': true};
    return coincidenContraseñas;
  }


}
