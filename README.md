# Desafío tecnico para Haciendola

Esta es una aplicación React desarrollada para el desafío técnico de Haciendola.

## Tecnologías utilizadas:
1. React, react-router
2. Redux
3. Sass (Sin librerías).
4. react-elastic-carousel: solo se usó para el carrusel; **El Slideshow fue escrito sin librerias.**

----
# Instrucciones para ejecutar el proyecto:

> **Nota:** Correr este proyecto en modo dev requiere NodeJS e instalar las dependencias. **Incluí una rama `build` que contiene la aplicación ya construida y se puede ejecutar desde cualquier servidor.**

## 1. Modo Dev

Estando dentro del directorio, ejecutar:

```bash
# Con npm
npm install

# Ó con yarn
yarn
```

### Comandos disponibles:

### `yarn start`

Ejecutará la aplicación en modo desarrollo (no optimizada para producción). Para verla en el navegador abra [http://localhost:3000](http://localhost:3000)

### `yarn build`

Construye la app optimizada y minificada, lista para producción. *(La rama `build` contiene una versión ya contruida).*

## 2. Desde rama `build` (versión minificada):

> *Se incluyó esta rama por si se quiere correr la aplicación sin necesidad de Nodejs o de instalar dependecias.*

Esta versión ya está optimiza y minificada para producción por lo que debería funcionar desde cualquier servidor, **Respetando que el directorio `build` DEBE SER LA RAÍZ**

Para este ejemplo usaremos la extensión `Live Server` de `Visual Studio Code`.

1. Abrimos el directorio `build` en `vscode`.
2. Click derecho sobre `index.html`
   - Seleccionamos `Open with Live Server`

**Esto ejecutará el sitio en un servidor local y se abrirá en su navegador**


