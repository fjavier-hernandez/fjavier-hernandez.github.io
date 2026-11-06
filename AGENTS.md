# AGENTS.md

Instrucciones para los agentes (Cursor y otros) que trabajen en este repositorio. Léelas antes de tocar nada y síguelas en cada tarea.

## Objetivo del repositorio

Este repositorio es el **dashboard personal** (Astro) de F. Javier Hernández con accesos a los materiales de FP Informática. Sitio: <https://fjavier-hernandez.github.io/>. No es un sitio MkDocs: los apuntes viven en otros repositorios (ral, aso, cloud, etc.).

El repositorio es **público**. Cada push a `main` despliega con GitHub Actions.

## Estructura

| Ruta | Contenido |
| --- | --- |
| `src/pages/` | Páginas (`/` y `/about`) |
| `src/components/`, `src/layouts/` | Componentes y layout |
| `src/data/courses.json` | Enlaces a cursos |
| `public/` | Estáticos |
| `archive/` | Restos del sitio Jekyll anterior (referencia) |
| `.github/workflows/` | Deploy a GitHub Pages |

## Compilar en local

Node.js ≥ 20.19 (ver `.nvmrc`):

```bash
npm install
npm run build
npm run preview
```

## Estilo de los apuntes

Todo texto nuevo debe ser **prosa conceptual y cohesionada**: párrafos completos, con conectores que expliquen el porqué y enlacen una idea con la siguiente. Está prohibido el estilo telegráfico: no se admiten listas de fragmentos, frases sin verbo ni el formato «X: Y». Cada concepto se presenta explicando qué es, para qué sirve y cómo encaja en el conjunto antes de entrar en detalles, y el texto se centra en el tema que toca.

Cada párrafo tendrá entre **5 y 7 líneas** como máximo; si se alarga, se divide por ideas. El tono es profesional, sin coloquialismos, muletillas ni expresiones de chat. Se escribe en **castellano**. Las siglas se desarrollan la primera vez que aparecen en cada tema, por ejemplo «red de área local (LAN)». Lo que ya se explicó en otro tema se enlaza y no se repite. Se usan con mesura las admoniciones de Material (`!!! note`, `!!! tip`, `!!! warning`) y los bloques de código con el lenguaje indicado.

## Imágenes y diagramas

Las capturas que se leen mal (borrosas, pequeñas, con texto ilegible o con datos que no deben verse) se rehacen como diagramas SVG propios. Los SVG existentes no se quitan ni se sustituyen sin motivo. Las fotos reales de equipos o materiales llevan crédito (autor, fuente y licencia) en el pie de la figura. Toda imagen lleva un texto alternativo (`alt`) descriptivo. No se suben imágenes sin licencia de uso.

## Datos personales: nunca

No se escriben ni se suben datos del alumnado, familias, DNI, horarios, firmas, rutas locales de OneDrive u Obsidian, credenciales ni tokens. El correo de contacto público del profesor puede aparecer; no se añaden otros datos personales.

## Forma de trabajar con Git

Trabaja en una **rama nueva**, abre una **PR** y **no la fusiones**: la revisa Neo. Fusionar en `main` despliega el sitio. No toques los repos MkDocs desde aquí.

## Específico de este repositorio

- Stack: **Astro**, estética terminal/matrix.
- Los cursos publicados son enlaces a otros repos; no se duplican aquí los apuntes.
- Settings de Pages: Source = GitHub Actions.
