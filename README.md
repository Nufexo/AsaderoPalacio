# Asadero Palacio

Sitio web estático de un asador (Asadero Palacio) construido con Astro y Preact.

## Descripción

Este repositorio contiene la web de Asadero Palacio. Está implementada con Astro  y componentes Preact para UI interactivas. Incluye contenidos en español e inglés, una galería de imágenes, listado de productos y páginas informativas.

## Tecnologías

- Astro 
- Preact (para componentes interactivos)
- Photoswipe (galería/lightbox)
- image-size (utilidad para leer dimensiones de imágenes)
- Prettier + ESLint para formateo y linting

## Configuración relevante

- URL del sitio (configurada en `astro.config.mjs`): `https://asaderopalacio.es`
- Salida: `static`
- Soporte para idiomas: `es` (por defecto) y `en` (sin prefijo para el idioma por defecto)

## Instalación

1. Clona el repositorio:

   git clone <repositorio>
   cd AsaderoPalacio

2. Instala dependencias (usa pnpm, npm o yarn según prefieras). Este proyecto incluye `pnpm-lock.yaml`, así que `pnpm` es recomendado:

   pnpm install

## Scripts disponibles

Los scripts definidos en `package.json` son:

- `dev` / `start`: Iniciar el servidor de desarrollo (Astro)
- `build`: Construir el sitio estático
- `preview`: Previsualizar la build estática localmente
- `astro`: Ejecutar comandos de Astro




## Estructura del proyecto (resumen)

- `src/` - Código fuente del sitio
  - `components/` - Componentes Astro/Preact usados en las páginas
  - `data/` - Datos locales (productos, galería)
  - `i18n/` - Archivos de traducción (`es.json`, `en.json`)
  - `pages/` - Páginas del sitio (`index.astro`, `about.astro`, `gallery.astro`, ...)
  - `styles/` - CSS global y utilidades
- `public/` - Assets públicos (imágenes, fuentes, íconos)
- `astro.config.mjs` - Configuración de Astro
- `package.json` - Scripts y dependencias

## i18n

La configuración de internacionalización en `astro.config.mjs` define `es` como idioma por defecto y añade `en`. Las rutas no usan prefijo para el idioma por defecto.

## Despliegue

La salida es estática, por lo que puedes desplegar en cualquier hosting de sitios estáticos como Netlify, Vercel (configurando build command `pnpm build` y publish directory `dist/`), GitHub Pages, o un CDN.

## Notas del desarrollador

- Integraciones incluidas: `@astrojs/preact`, `@astrojs/sitemap`.
- Linting y formateo con Prettier y ESLint están configurados en `package.json`.


## Licencia

Este proyecto (contenido, imágenes y archivos del sitio) está licenciado bajo Creative Commons Attribution 4.0 International (CC BY 4.0).

Resumen rápido de la licencia:

- Puedes compartir y adaptar el material, incluso para fines comerciales.
- Debes atribuir la obra al autor original: Halepensis.
- Debes indicar si has realizado cambios y proporcionar un enlace a la licencia: https://creativecommons.org/licenses/by/4.0/

El archivo `LICENSE` contiene el texto completo de la licencia.

Si prefieres una licencia diferente para el código fuente (por ejemplo MIT para el código y CC BY para los contenidos), dímelo y la añadimos.


