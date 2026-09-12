# Apuntes FP Informática — F. Javier Hernández

Dashboard personal (Astro) con accesos a materiales de FP Informática.
Estética terminal / matrix. Sitio: [fjavier-hernandez.github.io](https://fjavier-hernandez.github.io/).

> Migración desde Jekyll (`jekyll-theme-hacker`). Los restos del sitio anterior están en [`archive/`](./archive/).

## Requisitos

- Node.js ≥ 20.19 (ver `.nvmrc`)

## Desarrollo local

```sh
npm install
npm run dev
```

Abre `http://localhost:4321`.

| Comando            | Acción                                      |
| :----------------- | :------------------------------------------ |
| `npm run dev`      | Servidor de desarrollo                      |
| `npm run build`    | Build estático en `./dist/`                 |
| `npm run preview`  | Previsualiza el build localmente            |

## Estructura

```text
/
├── public/                 # Estáticos (favicon, verificación Search Console)
├── src/
│   ├── components/         # Card.astro
│   ├── data/courses.json   # Enlaces a cursos / próximamente
│   ├── layouts/            # Layout (header + estilos matrix)
│   └── pages/              # / y /about
├── archive/                # Restos Jekyll (referencia)
└── .github/workflows/      # Deploy a GitHub Pages
```

## Páginas

- `/` — dashboard con tarjetas de cursos
- `/about` — biografía

Cursos publicados (MkDocs en otros repos; no se tocan aquí):

- [RAL](https://fjavier-hernandez.github.io/ral/)
- [SOR](https://fjavier-hernandez.github.io/sor/)
- [ASO](https://fjavier-hernandez.github.io/aso/)
- [Proyecto Intermodular ASIR](https://fjavier-hernandez.github.io/pi_asir/)

## Deploy a GitHub Pages

1. En el repo **Settings → Pages → Build and deployment → Source**: **GitHub Actions**.
2. Push a `main` (o dispara el workflow manualmente).
3. El workflow [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml) hace `astro build` y publica `dist/` con Actions.

`site` en `astro.config.mjs`: `https://fjavier-hernandez.github.io` (`base: '/'` porque el repo es `usuario.github.io`).

## Contacto

- Email: fj.hernandez@edu.gva.es
- LinkedIn: [fjavier-hernandez-illan](https://www.linkedin.com/in/fjavier-hernandez-illan/)
- GitHub: [fjavier-hernandez](https://github.com/fjavier-hernandez)
