# Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.10.

Crearemos un archivo de registro, para que el usuario se pueda registrar.

El formulario tendrá de campos: nombre y apellidos, teléfono, correo, dirección, localidad, provincia, contraseña (con un campo para repetir contraseña) y un campo checkbox para aceptar las condiciones de uso.

Al enviar el formulario, se tendrá que comprobar que la contraseña es válida, que el campo repetir contraseña sea correcto y que el checkbox de las condiciones esté marcado. Los campos obligatorios serán el nombre y apellidos, correo, teléfono y contraseña.

Para la visualización del formulario podremos cambiar el archivo router para mostrarlo desde un principio en nuestra página o de forma opcional, investigar sobre el objeto Router para navegar de una página a otra en cuyo caso pondremos un botón en el login que nos redireccione a la página de registro y otro que nos lleve a la página del login desde el registro.
