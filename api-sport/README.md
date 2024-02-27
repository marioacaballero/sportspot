## Installation

```bash
$ npm install
```

## Running the app

````bash
# development
$ npm run start

# watch mode
$ npm run start:dev


## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
````

# SCALEWAY

## Paso 1: Configurar el Servidor en Scaleway

Iniciar sesión en Scaleway: Accede a tu cuenta de Scaleway en https://www.scaleway.com/.

Crear una instancia de servidor: Ve al panel de control y crea una instancia de servidor. Elige el sistema operativo que prefieras (por ejemplo, Ubuntu 20.04 LTS) y asegúrate de abrir los puertos necesarios (por defecto, el puerto 80 y/o 443 para HTTP/HTTPS).

Conectar al servidor: Una vez que la instancia esté lista, conéctate a ella mediante SSH usando el comando:

```bash
ssh usuario@ip_del_servidor
```

Reemplaza usuario con tu nombre de usuario y ip_del_servidor con la dirección IP de tu instancia.

## Paso 2: Preparar el Entorno en el Servidor

1 Actualizar el sistema: Ejecuta los siguientes comandos para asegurarte de que el sistema esté actualizado:

```bash
sudo apt update
sudo apt upgrade
```

2 Instalar Node.js y npm: Instala Node.js y npm en el servidor. Puedes hacerlo utilizando NVM (Node Version Manager) para gestionar las versiones de Node.js:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
source ~/.bashrc
nvm install stable
```

Instalar MongoDB u otra base de datos (si es necesario): Si tu aplicación Nest.js requiere una base de datos, instálala y configúrala adecuadamente en el servidor.

## Paso 3: Clonar el Repositorio del Backend

Clonar el repositorio: Utiliza Git para clonar el repositorio de tu backend Nest.js en el servidor:

```bash
git clone url_del_repositorio
```

Reemplaza url_del_repositorio con la URL de tu repositorio.

### Paso 4: Instalar Dependencias y Configurar la Aplicación

Instalar las dependencias del proyecto: Navega hasta el directorio del proyecto y ejecuta:

```bash
cd nombre_del_proyecto
npm install
```

## Configuración de Variables de Entorno

1 - Navegar al directorio del proyecto: Ve al directorio de tu proyecto Nest.js donde deseas configurar las variables de entorno.

2 - Crear o editar el archivo .env: Puedes crear o editar el archivo .env directamente desde la línea de comandos. Utiliza un editor de texto como Nano o Vim. Por ejemplo, para crear un archivo .env y editarlo con Nano, ejecuta:

```bash
nano .env
```

Esto abrirá un nuevo archivo .env en el editor Nano.

3 - Agregar las variables de entorno: Dentro del archivo .env, añade tus variables de entorno en el formato NOMBRE_VARIABLE=valor. Por ejemplo:

```plaintext
PORT=3000
MONGODB_URI=mongodb://usuario:contraseña@localhost:27017/base_de_datos
OTRO_VARIABLE=valor
```

Puedes agregar todas las variables de entorno necesarias para tu aplicación.

4 - Guardar y salir del editor: En Nano, puedes guardar los cambios presionando Ctrl + O (para escribir) y luego Enter, y luego salir presionando Ctrl + X.

5 - Verificar la configuración: Verifica que el archivo .env se haya creado o editado correctamente ejecutando para ver su contenido.

```plaintext
cat .env
```

# Paso 5: Ejecutar la Aplicación

## Ejecución de la Aplicación con PM2

PM2 es un administrador de procesos para aplicaciones Node.js que facilita la gestión de aplicaciones en producción.

1 - Instalar PM2: Si no lo has hecho aún, instala PM2 globalmente en tu servidor ejecutando:

```bash
npm install pm2 -g
```

2 - Iniciar la aplicación con PM2: Navega hasta el directorio de tu proyecto y ejecuta tu aplicación utilizando PM2:

```bash
pm2 start npm --name api-web2 -- run start:dev
```

Gestionar la aplicación con PM2: Puedes administrar tu aplicación utilizando varios comandos de PM2, por ejemplo:

```bash
pm2 list                    # Listar todas las aplicaciones administradas por PM2
pm2 logs mi-aplicacion      # Ver los logs de la aplicación
pm2 restart mi-aplicacion   # Reiniciar la aplicación
pm2 stop mi-aplicacion      # Detener la aplicación
```
