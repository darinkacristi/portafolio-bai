# BAI · Portafolio Audiovisual

Portafolio profesional construido con **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS** y **Framer Motion**. Cada fotografía y video es un proyecto independiente con su propia ficha (cliente, año, descripción, roles y créditos), galería con lightbox, reproductor embebido y navegación entre proyectos. Listo para desplegar en Vercel.

## ✨ Características

- **Rutas**: `/` (home), `/portfolio`, `/portfolio/[slug]`, `/about`, `/contact`
- **Sistema de proyectos** tipado en `data/projects.ts` (foto y video)
- **Filtros por categoría** sin recargar (Framer Motion `AnimatePresence`)
- **Lightbox** con navegación por teclado (← → Esc)
- **Video** desde YouTube, Vimeo o `.mp4` local (con _facade_ para mejor Lighthouse)
- **SEO**: metadata dinámica, Open Graph, `sitemap.xml`, `robots.txt`, URLs amigables
- **Rendimiento**: `next/image`, lazy loading, code splitting, fuente optimizada
- **Estética pastel** del diseño original: Montserrat, blobs, cursor personalizado, bordes redondeados

## 🚀 Empezar

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## 📝 Editar tu contenido

1. **Proyectos** → `data/projects.ts`. Copia un bloque, cambia el `slug` (único, sin espacios) y rellena los campos.
   - Fotos: deja `images: [...]` con rutas dentro de `/public/projects/<slug>/`
   - Videos: pega la URL en `videoUrl` (YouTube/Vimeo) o una ruta `.mp4` local. Si dejas `thumbnail: ""`, se genera solo desde el video.
   - `featured: true` lo muestra en la home.
2. **Imágenes** → colócalas en `public/projects/<slug>/`. Mientras no existan, se muestra un placeholder pastel (el sitio no se rompe).
3. **Clientes y testimonios** → `data/clients.ts` (logos PNG en `public/clients/`).
4. **Datos del sitio y redes** → `lib/site.ts` (email, Instagram, YouTube, WhatsApp y **tu dominio real**).

## ☁️ Desplegar en Vercel

1. Sube el repo a GitHub.
2. En [vercel.com](https://vercel.com) → **New Project** → importa el repo.
3. Framework: **Next.js** (autodetectado). Deploy.
4. Edita `siteConfig.url` en `lib/site.ts` con tu dominio definitivo para que el sitemap y los Open Graph apunten bien.

## 🗂️ Estructura

```
app/                 Rutas (App Router) + sitemap + robots + 404
components/          Componentes reutilizables (UI y secciones)
data/                projects.ts y clients.ts (tu contenido)
lib/                 types.ts, utils.ts, site.ts
public/              Imágenes y assets estáticos
```
