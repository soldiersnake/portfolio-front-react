# Portfolio — Frontend

Frontend del portfolio de Mariano Macías. SPA en **React + TypeScript + Vite**, con **Tailwind CSS v4** (tema oscuro/minimalista) y contenido bilingüe **ES/EN** vía `react-i18next`.

Secciones: Hero, Sobre mí, Habilidades, Proyectos (con preview en iframe + fallback), Experiencia y Contacto (formulario conectado al backend).

## Cómo levantar el proyecto

```bash
npm install
cp .env.example .env    # completar según corresponda (ver variables abajo)
npm run dev              # http://localhost:5173
```

Otros comandos útiles:

```bash
npm run build     # build de producción en dist/
npm run preview   # sirve el build de producción localmente
```

## Variables de entorno

Definidas en `.env` (a partir de `.env.example`):

| Variable | Descripción | Ejemplo |
|---|---|---|
| `VITE_API_URL` | URL base del backend (sin `/` al final). El formulario de contacto hace `POST` a `${VITE_API_URL}/contact`. | `http://localhost:3000` |

## Estructura de contenido

Todo el contenido (perfil, skills, experiencia, proyectos) vive en `src/data/*.ts`, y los textos de la interfaz en `src/i18n/locales/{es,en}.json`. Para sumar un proyecto nuevo a la sección de Proyectos, alcanza con agregar un objeto en `src/data/projects.ts` (ver el comentario en ese archivo con la guía de campos) — no requiere tocar componentes.

Más detalle general del proyecto completo (frontend + backend + guía de despliegue gratuito) en el `README.md` de la carpeta raíz `portfolio-app/`.
