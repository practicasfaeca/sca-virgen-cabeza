# PROJECT.md — Web SCA Virgen de la Cabeza

Web comercial de la Cooperativa Virgen de la Cabeza (Montejícar, Granada). Almazara cooperativa fundada en 1963, integrada en DCOOP y en la DOP Montes de Granada. Suministra aceite (venta online) y productos agrícolas a sus socios (catálogo, sin venta online).

## Stack

- HTML5, CSS3, JavaScript vanilla. **Sin frameworks**: nada de React, Vue, Bootstrap, Tailwind, jQuery.
- Estructura por archivos: un `.html` por página, CSS global en `styles/`, scripts en `scripts/`.
- Imágenes en `assets/images/<seccion>/`, vídeos en `assets/videos/`.
- Sin dependencias externas salvo Google Fonts y Google Maps embed.

## Posicionamiento de marca

Cooperativa de montaña honesta. Gente de pueblo currándoselo desde 1963. **No es una marca premium creada desde el marketing** (tipo Castillo de Canena), es lo contrario: una almazara real con socios reales que se ha modernizado con ayudas públicas e instalación fotovoltaica.

Tono: tradición, calidad, cercanía, sostenibilidad. Sobrio sin caer en pretencioso. Cálido sin ser folclórico.

## Paleta de color

Variables CSS globales en `:root`. Usar siempre las variables, nunca códigos hex hardcodeados en componentes.

```css
:root {
  --color-oliva-oscuro: #3A4A2A;   /* titulares, header, navegación */
  --color-crema:        #F5F1E8;   /* fondo general */
  --color-dorado:       #C9A961;   /* acentos, CTAs, sellos */
  --color-tierra:       #8B7355;   /* secundarios, bordes */
  --color-carbon:       #1A171B;   /* texto cuerpo */
  --color-blanco:       #FFFFFF;   /* fondos de tarjeta */
  --color-gris-suave:   #E8E2D4;   /* líneas, separadores */
}
```

## Tipografías

Cargar desde Google Fonts en el `<head>` de cada página.

```css
:root {
  --fuente-titular: 'Cormorant Garamond', Georgia, serif;
  --fuente-cuerpo:  'Inter', system-ui, -apple-system, sans-serif;
}
```

Pesos: titulares 400/500/600, cuerpo 400/500/600.

## Restricciones de contenido (críticas)

Estas afirmaciones **no pueden aparecer en la web** porque no están documentadas o son falsas:

- **No** mencionar premios de la cooperativa. No los hay verificados.
- **No** afirmar exportación bajo marca propia. No hay evidencia.
- **No** publicar cifras de socios, hectáreas, producción o facturación sin fechar. Las cifras públicas son de 2016 y no están actualizadas.
- **No** publicar valores analíticos por producto (acidez, peróxidos, polifenoles). No existen datos públicos por SKU.
- **No** copiar el CIF actual del aviso legal de scavirgendelacabeza.com (`F18005099`). El CIF correcto según resoluciones oficiales es **`F18005009`**.

Sí pueden afirmarse con respaldo:

- Fundación en 1963.
- Integración en DCOOP (2013).
- Pertenencia a la DOP Montes de Granada.
- Traslado y modernización de la almazara (2016-2020), respaldada por subvención de 1.186.092,95 €.
- Instalación fotovoltaica para autoconsumo.
- Aceite de montaña: olivar a más de 900 m, alto oleico, baja acidez.

## Estructura de archivos

```
sca-virgen-cabeza/
├── .claude/
│   ├── PROJECT.md              (este archivo)
│   └── briefs/
│       ├── home.md
│       ├── cooperativa.md
│       ├── tienda.md
│       ├── productos-agricolas.md
│       ├── producto.md
│       ├── carrito.md
│       └── contacto.md
├── index.html
├── la-cooperativa.html
├── tienda.html
├── productos-agricolas.html
├── producto.html
├── carrito.html
├── contacto.html
├── styles/
│   ├── global.css              (variables, reset, tipografía, utilidades)
│   ├── componentes.css         (header, footer, botones, tarjetas reutilizables)
│   └── paginas.css             (estilos específicos por página)
├── scripts/
│   ├── main.js                 (navegación, animaciones scroll, botón arriba)
│   ├── carrito.js              (lógica carrito + localStorage)
│   └── catalogo.js             (filtros de tienda y productos agrícolas)
└── assets/
    ├── images/
    │   ├── hero/
    │   ├── about/
    │   ├── history-timeline/
    │   ├── highlights/
    │   ├── products/
    │   ├── agricolas/
    │   ├── premium-edition/
    │   ├── location/
    │   ├── certifications/
    │   └── icons/
    └── videos/
        └── hero-referencia.mp4
```

## Convenciones de código

- **Naming CSS**: BEM ligero. Bloque-componente, ej. `.tarjeta-producto`, `.tarjeta-producto__imagen`, `.tarjeta-producto--destacada`. Sin guiones bajos en nombres de archivo o variables.
- **IDs**: solo cuando hace falta JS, en minúsculas con guión, ej. `#abrir-menu-movil`.
- **Comentarios**: en español, por sección importante. Comentar el porqué, no el qué.
- **Sin código muerto**. Sin librerías cargadas que no se usen. Sin Bootstrap "por si acaso".
- **Mobile-first**. Todos los estilos base se escriben para móvil; `@media (min-width: 768px)` para tablet y `(min-width: 1024px)` para desktop.
- **Accesibilidad básica**: `alt` en todas las imágenes, `aria-label` en botones-icono, foco visible en navegación con teclado, contraste mínimo AA.

## Componentes globales (en todas las páginas)

### Header
- Logo izquierda + menú derecha + icono carrito al final del menú con contador.
- Menú: `Inicio · La cooperativa · Aceites · Productos agrícolas · Contacto`.
- En móvil: menú hamburguesa.
- Subrayado animado al hacer hover en links del menú (CSS puro).

### Footer
- 4 columnas: 1) logo + redes (Facebook, Instagram) · 2) navegación rápida · 3) contacto (teléfono, correo, dirección Montejícar) · 4) legales (aviso legal, privacidad, cookies).
- Franja inferior: sello DOP Montes de Granada + sello DCOOP + copyright.

### Elementos flotantes
- Botón "subir arriba" que aparece tras 400px de scroll. Esquina inferior derecha.
- Animaciones fade-in al entrar las secciones (IntersectionObserver + CSS, sin librería).

## Reglas de oro para Design

1. Cada brief de página describe los bloques en orden. **Respetar el orden**.
2. Usar **siempre** las variables CSS definidas aquí. No introducir colores nuevos sin justificación.
3. **Mobile-first siempre**. Si un componente no se ve bien en 360px, está mal hecho.
4. **No inventar contenido**. Si un brief no especifica un texto, dejarlo como placeholder claro `[TEXTO PENDIENTE]` para que el equipo lo rellene.
5. **No usar imágenes de stock**. Solo las que el equipo provee en `assets/images/`.
6. **Animaciones sutiles**. Fade-in al scroll, subrayado en links, zoom suave al hover. Nada que distraiga o ralentice.
