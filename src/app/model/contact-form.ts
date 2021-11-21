export class ContactForm{

    private _nombre: string;
  
    private _apellido: string;

    private _telefono: number;
  
    private _email: string;

    private _direccion: string;

    private _localidad: string;

    private _provincia: string;

    private _contraseña: string;

    private _passValid: string;

    private _condiciones: boolean;
  
   
    constructor(nombre: string, apellido: string, telefono: number, email: string, direccion: string, localidad: string, provincia: string,
       contraseña: string, passValid: string, condiciones: boolean) {
      this._nombre = nombre;
      this._apellido = apellido;
      this._telefono = telefono;
      this._email = email;
      this._direccion = direccion;
      this._localidad = localidad;
      this._provincia = provincia;
      this._contraseña = contraseña;
      this._passValid = passValid;
      this._condiciones= condiciones;

    }
  
    get nombre(): string {
      return this._nombre;
    }
  
    set nombre(value: string) {
      this._nombre = value;
    }
  
    get apellido(): string {
      return this._apellido;
    }
  
    set apellido(value: string) {
      this._apellido = value;
    }

    get telefono(): number {
        return this._telefono;
    }
    
    set telefono(value: number) {
        this._telefono = value;
    }
  
    get email(): string {
      return this._email;
    }
  
    set email(value: string) {
      this._email = value;
    }

    get direccion(): string {
      return this._direccion;
    }
    
    set direccion(value: string) {
      this._direccion = value;
    }

    get localidad(): string {
      return this._localidad;
    }
      
    set localidad(value: string) {
      this._localidad = value;
    }

    get provincia(): string {
      return this._provincia;
    }
        
    set provincia(value: string) {
      this._provincia = value;
    }

    get contraseña(): string {
      return this._contraseña;
    }
        
    set contraseña(value: string) {
      this._contraseña = value;
    }

    get passValid(): string {
      return this._passValid;
    }
        
    set passValid(value: string) {
      this._passValid = value;
    }

    get condiciones(): boolean {
      return this._condiciones;
    }
        
    set condiciones(value: boolean) {
      this._condiciones = value;
    }


  }
  