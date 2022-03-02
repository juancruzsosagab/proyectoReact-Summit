# Proyecto React Summit 🚀🚀


## Descripción
Este proyecto consiste en un abm de usuarios. Para loguearse, hay que crear un usuario a través de postman según la documentación. Desde la aplicación, se puede acceder a todos los usuarios, acceder a su detalle, crearlos, modificarlos y borrarlos. Se consumen estos servicios a través de axios que se comunica con la API realizada en express. En la carpeta config se encuentran las configuraciones (también el jwt en el header). 

Hay 4 landing pages:

* Home:
En el home se hace una consulta a la base de datos, realizando la consulta antes del primer renderizado. Se utiliza useState para almacenar el array de usuarios. El beneficio de utilizar es useState es que nos puede servir para renderizarlos nuevamente si realizamos alguna modificación. 
También, se encuentran dos métodos que están anidados. Uno que elimina el usuario del State con el método filter y generando un nuevo array y luego se elimina el usuario de la base de datos. Al hacer está modificación en el state, el componente se renderiza nuevamente y quedan los usuarios actualizados.

* Login:
En el componente login hay dos funciones. La primera simplemente actualiza los datos del usuario que está ingresando para enviarlos a la base de datos a través del servicio de autenticación (recibimos el jwt). Aquí se realizan validaciones en el front y en el back.

* SignUp:
Esta page sirve para crear usuarios. También tiene unas validaciones sencillas.

* UserDetail:
Esta page es para ver la información detallada del usuario (se utiliza useParams() para acceder al id que está en la URL, ya que en el compoment Card user, se envía a una URL dinámica). Aquí, también se encuentra la función para editar el usuario.





## Starting

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

```
git clone https://github.com/juancruzsosagab/proyectoReact-Summit.git
```

## Instalación 🔧

En el directorio del proyecto, run:

### `npm install`


## Construido con 🛠️

_Herramientas utilizadas_

* [React js](https://reactjs.org/docs/getting-started.html) - Framework utilizado
* [Axios](https://www.npmjs.com/package/axios) - Para request login
* [React Bootstrap](https://react-bootstrap.netlify.app) - Estilos
* [React-router-dom](https://reactrouter.com/docs/en/v6/getting-started/overview) - Routing


## Available Scripts

En el directorio del proyecto, run:

### `npm start`

Abre [http://localhost:3000](http://localhost:3000) para ver en el navegador (puede ser 3001, dependiendo de donde se levante la api).

Tener en cuenta que debe estar corriendo el proyecto express para que funcione el logueo. También, tener en cuenta el endpoint al cual apunta el request, ya que debe coincidir con el puerto que levante express por default


## Autor ✒️

* **Juan Cruz Sosa Gabrielli** - *Desarrollo* - [Juan Cruz](https://github.com/juancruzsosagab)




