- Instalar Angular CLI

```bash
npm install -g @angular/cli
```

- para comprobar

```bash
ng --version
```

- Instalar Nodejs

- En caso de tener un problema con la ejecución de scripts se debe abrir el PowerShell como **Administrador** (Ejecutar como administrador) y ejecutar el siguiente comando "Set-ExecutionPolicy RemoteSigned". Cuando pregunte escribir "Y" y presionar Enter y esto permitirá ejecutar scripts descargados solo si están firmados. Luego de esto cerrar y volver a abrir PowerShell y volver a ejecutar "npm install -g @angular/cli"

- En el archivo "angular.json" va a estar toda la configuración del proyecto.
- Para renderizar pagina de Angular:

- Para crear un nuevo proyecto

```bash
ng new nombre-proyecto
```

- Las preguntas que aparecen al crear el proyecto:

* autocompletar los comandos: si
* CSS
* Server-Side Rendering: no
* crear zoneless: si (en duda)
* AI tools: none

```bash
ng serve -o
```

- para usar routerLink se debe importar RouterLink
- provideRouter(routes): permite navegar por rutas
