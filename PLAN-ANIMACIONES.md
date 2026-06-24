# Plan de animaciones — Kiwatec Web

Stack: **GSAP 3** + **ScrollTrigger** + **@gsap/react** (`useGSAP`)

Objetivo: dar dinamismo y peso "premium" sin afectar performance ni
ensuciar el código. Animaciones sutiles, consistentes, accesibles
(respetan `prefers-reduced-motion`).

---

## 0. Fundación (hacer una sola vez, antes de tocar componentes)

### 0.1 Registrar plugins y helpers compartidos

Crear `src/lib/gsap.js`:

```js
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Defaults globales: easing y duración consistentes en toda la app
gsap.defaults({ ease: 'power3.out', duration: 0.8 })

// Respeto a usuarios con motion sensitivity
const prefersReduced =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

if (prefersReduced) {
  gsap.globalTimeline.timeScale(100) // acelera todo a "instantáneo"
}

export { gsap, ScrollTrigger, prefersReduced }
```

### 0.2 Hook reutilizable para "fade + slide up al scrollear"

Crear `src/hooks/useReveal.js`:

```js
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '../lib/gsap'

// Uso: const ref = useReveal({ stagger: 0.1 })
//      <div ref={ref}>...children...</div>
export function useReveal({ stagger = 0, y = 30, delay = 0 } = {}) {
  const ref = useRef(null)
  useGSAP(() => {
    if (!ref.current) return
    const targets = ref.current.children.length
      ? ref.current.children
      : ref.current
    gsap.from(targets, {
      y, opacity: 0, stagger, delay,
      scrollTrigger: { trigger: ref.current, start: 'top 80%' },
    })
  }, { scope: ref })
  return ref
}
```

### 0.3 Patrones que se van a repetir

| Patrón | Cuándo usarlo | Setup |
|---|---|---|
| **Reveal fade+up** | Cualquier sección al entrar en viewport | `useReveal()` |
| **Stagger grid** | Grillas de cards (10 razones, 6 aplicaciones, 7 features) | `useReveal({ stagger: 0.08 })` |
| **Parallax bg** | Imágenes de fondo en heros y secciones con bg image | `gsap.to(bg, { yPercent: -20, scrollTrigger: { scrub: true } })` |
| **Counter** | Números destacados ("70%", "5016 dispositivos") | `gsap.from({ val: 0 }, { val: 70, onUpdate })` |
| **Hover lift** | Cards con elevación al hover (ya hay CSS en 10 razones) | Tailwind `hover:` o GSAP onMouseEnter |

---

## 1. Inicio (`/`)

### 1.1 `InicioHero` — carrusel principal
**Estado:** Swiper sin animaciones de entrada del contenido.

**Animaciones a sumar:**
- ⭐ **Letter-stagger en el título** al entrar cada slide (split por letra o palabra)
- **Fade + slide up del subtítulo** con delay después del título (0.3s)
- **Botón "Conocer más"** con fade desde abajo (delay 0.5s)
- **Parallax sutil en la imagen de fondo** (scrub linkeado al scroll)
- **Reset de animaciones en `swiper.on('slideChange')`** para que se repita en cada slide

**Effort:** medio (split-text necesita atención, pero el resto es simple)

### 1.2 Secciones alternadas (QuienesSomos, SmartLights, Soluciones, Hardware, Beneficios)
**Estado:** 5 bloques con `imagen + texto + botón`, todos iguales, sin animación de entrada.

**Animaciones a sumar:**
- **Imagen entra desde el lado correspondiente** (izquierda o derecha según orden)
- **Texto entra desde el lado opuesto** con delay 0.15s
- **Botón fade + scale** con delay 0.4s
- **Hover en la imagen:** scale sutil 1.02 con `power2.out`

**Implementación:** un solo componente `SectionAlternate` o el hook `useReveal` aplicado individualmente. Si querés podemos extraer estos 5 bloques a un componente compartido — hoy son 5 componentes duplicados que sólo cambian texto/imagen.

**Effort:** medio (vale la pena el refactor para no repetir código de animación)

### 1.3 CTA final ("Hagamos la transformación juntos")
**Animaciones:**
- Fade del título con stagger por palabra
- Botón con bounce sutil al entrar
- **Background:** un gradiente que se mueve lento (idle animation con `gsap.to({}, { repeat: -1, yoyo: true })`)

---

## 2. Smart Lights (`/smart-lights`)

### 2.1 `SLHero`
Igual que el Hero de inicio: split-text + parallax bg.

### 2.2 `SLDescripcion`
- Título stagger por palabra
- Párrafo fade up

### 2.3 `SLCaracteristicas` — 7 cards alternadas (img izquierda / img derecha)
**Esto es lo más alto-impacto de la página.** Hoy son 7 bloques estáticos.

**Animaciones:**
- Cada bloque entra con **slide horizontal desde el lado de la imagen**
- Texto del otro lado con delay 0.2s
- **Línea separadora** que se "dibuja" de izquierda a derecha (`gsap.to` con `width: 0 → 100%`)
- **Hover en la screenshot:** efecto "tilt" sutil 3D usando `rotateY/rotateX` según posición del mouse
- **Bonus alto-impacto:** las screenshots de la plataforma (mapa, dashboard) podrían tener un overlay con "puntos pulsantes" simulando dispositivos activos. SVG circles con `gsap.to({ scale: 1.5, opacity: 0, repeat: -1 })`

**Effort:** medio + bonus alto

---

## 3. Soluciones (`/soluciones`)

### 3.1 `SolucionesHero` + `SolucionesDescripcion`
Mismo patrón hero/descripción.

### 3.2 `SolucionesGaleria` — grilla de tiles de aplicaciones (arriba)
Hoy: 6 thumbnails estáticos.

**Animaciones:**
- **Stagger entrance** al entrar al viewport (0.05s delay entre cards)
- **Hover:** scale 1.05 + brightness up, con `gsap.to` para ser smooth
- **Click:** ya scrollea al ancla — sumarle un "ripple" o flash

### 3.3 `SolucionesAplicaciones` — 6 secciones grandes alternadas
**Animaciones:**
- Image slide desde el lado correspondiente
- Texto slide del otro lado
- **Bullets** entran uno por uno con stagger (`stagger: 0.08`)
- **Background sutil parallax** en cada imagen

---

## 4. Hardware (`/hardware`)

### 4.1 `HardwareProductos` — 5 cards de productos
**Estado:** grid estático 3+2.

**Animaciones:**
- Stagger entrance (cada card aparece con delay incremental)
- **Hover en cada card:** scale + leve rotación 3D (`rotateY: 5`)
- **Botón "Descargar ficha técnica":** subtle pulse idle
- **Bonus:** las imágenes de productos podrían tener un "spin" al hover (`rotateY: 360` en 1.5s)

**Effort:** bajo

---

## 5. Nosotros (`/nosotros`)

### 5.1 `NosotrosDescripcion` + `NosotrosCarrusel`
- Mismo patrón de descripción
- Carrusel: ya tiene Swiper. Sumar fade-in al cargar la sección.

---

## 6. Beneficios (`/beneficios`)

### 6.1 `BeneficiosDescripcion`
Título stagger por palabra + párrafo fade.

### 6.2 `BeneficiosProblemas` — 3 tarjetas (NUEVO)
**Animaciones:**
- Las 3 cards entran con **stagger lateral** (la del medio cae verticalmente, las laterales desde los costados)
- **Hover:** el ícono interno gira o late (no hay ícono hoy — opcional sumar uno por problema)
- **Bonus:** el borde de cada card podría "dibujarse" al entrar (SVG stroke draw)

### 6.3 `BeneficiosCarrusel`
Stagger entrance de las 4 cards.

### 6.4 `BeneficiosRazones` — 10 cards grid (NUEVO, recién rediseñado)
**Esto es lo más visible.** Hoy ya tiene hover lift por CSS.

**Animaciones a sumar:**
- ⭐ **Stagger grid entrance** — las 10 cards entran con `stagger: { each: 0.06, from: 'start', grid: [2, 5] }`
- ⭐ **SVG icon draw-on** — cada ícono se "dibuja" con `drawSVG` plugin de GSAP (necesita Club GreenSock, plan Shockingly Green) **O** alternativa free: animar `stroke-dashoffset` manualmente con `gsap.from`
- **Number badge (01..10) count-up** al entrar la card (de 00 al número final en 0.6s)
- **Hover potenciado:** además del lift, el ícono "late" sutilmente (`scale: 1.1 yoyo`)

**Effort:** medio-alto si vamos con draw-on; bajo si solo es stagger + count-up

---

## 7. Contacto (`/contacto`)

### 7.1 `ContactoHero`
Stagger entrance.

### 7.2 `ContactoForm`
- Form fields entran con stagger (label + input juntos por field)
- **Focus en input:** label "flota" arriba (efecto floating label con GSAP)
- Botón submit: subtle pulse idle

### 7.3 `ContactoEquipo` (NUEVO)
Las 2 tarjetas entran con flip 3D desde los lados (Damián desde izquierda, Jesica desde derecha).

### 7.4 `ContactoReunion`
CTA con fade in y background con parallax sutil.

---

## 8. Componentes globales

### 8.1 `Navbar`
- **Reveal al cargar:** slide desde arriba con bounce
- **Background blur cuando scrollea > 50px** (efecto sticky con cambio de bg)
- **Active link** con underline animado (línea que se desliza al cambiar de ruta)

### 8.2 `Footer`
Fade in al entrar viewport.

### 8.3 `WhatsAppButton`
- Subtle pulse cada 3 segundos (ya capta atención)
- Bounce al hacer hover

### 8.4 Transiciones entre rutas
**Opcional pero alto-impacto:** wrapper en `App.jsx` que hace fade-out al salir de la ruta y fade-in al entrar. Con React Router 7 se hace con un wrapper alrededor de `<Routes>` que usa `useLocation` + GSAP.

---

## Orden de implementación sugerido

### Fase 1 — Foundation + quick wins (2-3 horas)
1. Crear `src/lib/gsap.js` + `src/hooks/useReveal.js`
2. Aplicar `useReveal` a TODAS las secciones de inicio + Smart Lights + Soluciones + Hardware + Beneficios + Nosotros + Contacto
3. Stagger entrance en grids: 10 razones, 3 problemas, 6 aplicaciones, 7 features
4. Parallax en heros

**Resultado:** todo el sitio "vive" al hacer scroll. 80% del impacto.

### Fase 2 — Detalle y polish (3-4 horas)
5. Split-text en títulos hero
6. Hover micro-interacciones (tilt cards, image zoom, etc.)
7. Navbar con scroll behavior
8. Count-up en badges numéricos
9. Línea separadora animada en SLCaracteristicas

### Fase 3 — Bonus alto-impacto (4-6 horas)
10. SVG draw-on en íconos de 10 razones
11. Puntos pulsantes en screenshots de Smart Lights
12. Transición entre rutas
13. Background animado en CTA

---

## Reglas de oro

- **`prefers-reduced-motion`** debe estar respetado en todo. El helper en `lib/gsap.js` ya lo cubre globalmente.
- **No animar `width/height/top/left`** — solo `transform` y `opacity` para performance.
- **`will-change`** solo en elementos que efectivamente van a animar — no en todos.
- **ScrollTrigger.refresh()** después de mutaciones de DOM (ej. carga de imágenes que cambian alto). Usar `ScrollTrigger.refresh()` en un `load` listener.
- **Cleanup automático** con `useGSAP({ scope: ref })` — evita memory leaks al desmontar.
- **Performance check** después de Fase 1: Lighthouse score debe seguir >90 en mobile.

---

## ¿Por dónde empezamos?

Mi recomendación: hagamos **Fase 1 completa** y se la mostramos a Damián.
Si valida el ritmo y el feel, seguimos con Fase 2. La Fase 3 (especialmente
los puntos pulsantes y la draw-on de íconos) la dejamos como "wow factor"
opcional según presupuesto/timing.

Avisame por dónde arrancamos y empiezo a tirar commits.
