# GUÍA DE DESPLIEGUE DEL VISOR DE BLOQUEOS

# Getting Started with Create React App


Este proyecto esta realizado con tecnologías JavaScript.

- **FrontEnd**: Libreria React Js ([https://react.dev](https://react.dev)) 
- **BackEnd**: Node Js, entorno de ejecución de Javascript en el servidor. Construido con el motoro V8 de Js en Chrome. ([https://nodejs.org/es](https://nodejs.org/es))

## Requerimientos:

**Entorno de Ejecución**

Instalar el entorno de ejecución del aplicativo, para ello dirigirse a [https://nodejs.org/es](https://nodejs.org/es) y descargar la versión LTS más reciente.

Seguir las indicaciones que trae por defecto el instalador.

Para corroborar que la instalación se haya realizado de manera correcta, ejecutar los siguientes comandos en el command propmt del sistema(cdm, bash, zsh, etc.):

### `node --version` 
Ejemplo de respuesta: `v18.16.1`
### `npm --version`
Ejemplo de respuesta: `9.7.2`

---

**Dependencias**

Luego se requiere instalar las dependencias del aplicativo, para ello dirigirse a la raíz del proyecto y ejecutar el siguiente comando:

### `npm install`

---

**Configuración de la Aplicación**

Para configurar las variables de entorno del proyecto, dirigirse a la raíz del proyecto y editar el archivo `.env`

```
#Server
PORT=3007                           (Puerto en donde la aplicación escuchara las 
                                     solicitudes HTTP. Si no se 
                                     configura, por defecto sera el puerto 8080)

#Database
SERVER_DATABASE=localhost           (Nombre del Servidor de Base de Datos)
DATABASE_NAME=SpringSaludFake       (Nombre de la Base de Datos)
USER_DB=visorUser                   (Usuario de la Base de Datos)
PASSWORD_DB=517667Hc@               (Contraseña del usuario de la Base de Datos)

#Sps:

#Listado de bloqueos:
SP_GET_LOCKS=GET_CITAS              (SP que trae la lista de procesos bloqueando
                                     la base de datos.)
```

---

## Ejecución:

Terminadas de instalar las dependencias y aplicar las configuraciones necesarias, la aplicación esta lista para ser levantada.

Para ello ejecutar el siguiente comando en la raiz del proyecto

### `npm start`

Si todo fue realizado correctamente, se debería tener la siguiente respuesta:

```
Servidor corriendo en el puerto : 3007
Para acceder al aplicativo: http://localhost:3007
```


---

Si se requiere cambiar la configuración de la aplicación, ejecutar la combinación de teclas `ctrl + C` para detener el aplicativo. Realizar los cambios necesarios y volver a levantar el aplciativo con el comando `npm start`.
