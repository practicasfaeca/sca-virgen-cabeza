# Brief — Home (`index.html`)

> **Antes de empezar:** lee `.claude/PROJECT.md`. Este brief asume que conoces el stack, la paleta, las tipografías, el posicionamiento de marca y las restricciones de contenido.

## Objetivo de la página

Punto de entrada de la web. El visitante baja una sola vez y conoce toda la marca: quiénes somos, qué hacemos, qué nos diferencia, qué vendemos y por qué confiar.

Acción primaria esperada al final del scroll: ir a la tienda de aceites o a la página de la cooperativa.

## Estructura de bloques (en orden de scroll)

### 1. Hero con vídeo de fondo

- Vídeo en bucle (autoplay, muted, loop, playsinline). Archivo: `assets/videos/hero-referencia.mp4`. Atributo `poster="assets/images/hero/hero-fallback.jpg"` para mostrar imagen mientras carga.
- El vídeo ocupa el 100% del ancho y altura del hero. `object-fit: cover`.
- Overlay oscuro semitransparente encima del vídeo para que el texto se lea: `rgba(26, 23, 27, 0.45)`.
- Texto superpuesto centrado vertical y horizontalmente:
  - Titular grande: **"Desde 1963, aceite de montaña de Montejícar"**
    - Tipografía `--fuente-titular`, color `--color-crema`, peso 500.
    - Tamaño desktop: ~64px. Mobile: ~36px.
  - Subtítulo dinámico (ver bloque JS abajo) en `--fuente-cuerpo`, color `--color-crema`, peso 400, ~20px desktop / ~16px mobile.
  - Botón CTA: **"Ver nuestros aceites"** → enlace a `tienda.html`. Botón de fondo `--color-dorado`, texto `--color-carbon`, padding generoso, sin borde, animación de hover sutil (oscurece ligeramente).
- Altura del hero: 100vh en desktop, mínimo 600px. En mobile: 90vh.

**Texto dinámico estacional (subtítulo)** — JS al cargar la página:

```js
const mes = new Date().getMonth(); // 0-11
const textoEstacional =
  (mes >= 9 || mes <= 0) ? "Estamos en plena recolección" :     // oct-ene (9,10,11,0)
  (mes >= 1 && mes <= 4) ? "Envasando la última cosecha" :       // feb-may (1,2,3,4)
                            "Los olivos están en flor";          // jun-sep (5,6,7,8)
document.getElementById('hero-subtitulo').textContent = textoEstacional;
```

### 2. Quiénes somos breve

- Fondo `--color-crema`.
- Layout: 2 columnas en desktop (texto izquierda, imagen derecha), 1 columna en mobile (imagen arriba, texto abajo).
- Imagen: `assets/images/about/cooperativa-exterior.jpg`. Borde redondeado suave (8px).
- Texto:
  - Eyebrow (encima del título, pequeño, color `--color-dorado`, mayúsculas, letter-spacing): **"LA COOPERATIVA"**
  - Titular: **"Más de medio siglo de cooperativismo en los Montes de Granada"**
  - Cuerpo (2 párrafos):
    > "Somos una cooperativa fundada en 1963 por las familias olivareras de Montejícar. Desde entonces transformamos en nuestra almazara la cosecha de nuestros socios y elaboramos aceites que expresan el carácter del olivar de montaña.
    >
    > Pertenecemos a la DOP Montes de Granada y formamos parte de DCOOP, la mayor cooperativa olivarera de España. Eso nos da raíces locales y red para llegar lejos."
  - Botón secundario: **"Conoce nuestra historia"** → enlace a `la-cooperativa.html`. Botón outline (borde `--color-oliva-oscuro`, texto `--color-oliva-oscuro`, fondo transparente).

### 3. Selector de uso

- Fondo `--color-blanco`.
- Eyebrow centrado: **"¿QUÉ ACEITE BUSCAS?"**
- Titular centrado: **"Encuentra el tuyo según el uso"**
- Grid de 3 tarjetas (1 columna en mobile, 3 en desktop), separación generosa entre tarjetas.
- Cada tarjeta:
  - Icono SVG grande en la parte superior (60px), color `--color-dorado`.
  - Título medium (`--fuente-titular`, peso 500, ~24px).
  - Descripción corta (2 líneas, `--fuente-cuerpo`, peso 400).
  - Enlace al final: **"Ver este aceite →"**, color `--color-oliva-oscuro`, con animación sutil de la flecha al hover.
  - Borde sutil `1px solid --color-gris-suave`, padding amplio, hover: ligero levantamiento (transform translateY(-4px), sombra suave).

Contenido de las 3 tarjetas:

| Tarjeta | Icono sugerido | Título | Descripción | Enlace destino |
|---|---|---|---|---|
| 1 | Cazuela / olla | "Para cocinar a diario" | "Un coupage equilibrado que va bien con todo: guisos, sofritos y fritos." | `producto.html?id=aove-coupage` |
| 2 | Hoja olivo / gota | "Para crudo y aliñar" | "Picual monovarietal intenso para ensaladas, tostadas y un buen pan." | `producto.html?id=dcoop-seleccion-picual` |
| 3 | Lazo / regalo | "Para regalar y disfrutar" | "Una hojiblanca de recolección temprana de producción limitada." | `producto.html?id=unico-frutado` |

### 4. Cronología horizontal de 6 hitos

- Fondo `--color-crema`.
- Eyebrow: **"NUESTRA HISTORIA"**
- Titular centrado: **"Seis décadas de evolución"**
- Línea horizontal con 6 puntos. En desktop: línea continua horizontal con puntos circulares (12px de diámetro, color `--color-dorado`) y bajo cada punto el año en grande + descripción corta debajo. En mobile: vertical, línea vertical con puntos a la izquierda y texto a la derecha.
- Hitos (en orden):

| Año | Título | Descripción corta (1 línea) |
|---|---|---|
| 1963 | Fundación | "Nace la cooperativa en Montejícar" |
| 2013 | Integración en DCOOP | "Entramos en la mayor cooperativa olivarera de España" |
| 2016 | Traslado de la almazara | "Aprobación municipal del nuevo emplazamiento" |
| 2020 | Modernización | "Subvención de 1,18 M € para mejorar las instalaciones" |
| 2022 | Apoyo energético | "Ayuda REACT-UE por el sobrecoste de energía" |
| 2024 | Autoconsumo solar | "Instalación de placas fotovoltaicas en la almazara" |

Nota: el año 2024 está pendiente de confirmación final. Si no se confirma, sustituir por **2023 — Eficiencia energética — "Ayuda FEADER para el patio de limpieza"**.

### 5. Tres virtudes diferenciales

- Fondo `--color-blanco`.
- Eyebrow: **"POR QUÉ ELEGIRNOS"**
- Titular centrado: **"Lo que hace único a nuestro aceite"**
- Grid de 3 tarjetas (1 columna mobile, 3 desktop). Estilo sobrio, sin bordes prominentes.

Contenido:

| Tarjeta | Icono sugerido | Título | Descripción (2 líneas) |
|---|---|---|---|
| 1 | Montaña | "Aceite de montaña" | "Nuestro olivar crece a más de 900 metros. La maduración lenta da aceites con cuerpo, alto en ácido oleico y baja acidez." |
| 2 | Manos / personas | "Cooperativa familiar" | "Cientos de familias olivareras llevan décadas trayendo aquí su cosecha. Cada gota tiene un nombre detrás." |
| 3 | Hoja con sol | "Compromiso con el medio ambiente" | "Hemos modernizado la almazara con ayudas públicas y autoconsumo fotovoltaico para reducir nuestra huella energética." |

### 6. Producto destacado de campaña

- Fondo oscuro: `--color-oliva-oscuro`. Texto en `--color-crema`.
- Layout: imagen producto izquierda, texto derecha (en mobile: imagen arriba, texto debajo).
- Imagen del producto Único Frutado, sobre fondo del bloque, sin caja ni borde.
- Texto:
  - Sello pequeño arriba: **"EDICIÓN LIMITADA"**, color `--color-dorado`, letter-spacing amplio.
  - Titular en `--fuente-titular`, ~48px desktop: **"Único Frutado"**
  - Subtítulo: **"Hojiblanca de recolección temprana"**
  - Cuerpo (2 párrafos):
    > "Una selección de los mejores lotes del inicio de campaña. Hojiblanca recogida temprano, con cuerpo, vigor y un frutado intenso que solo aparece en las primeras semanas de molienda.
    >
    > Producción limitada. Cuando se agota la campaña, ya no hay más hasta la siguiente."
  - Botón CTA: **"Comprar Único Frutado"** → `producto.html?id=unico-frutado`. Fondo `--color-dorado`, texto `--color-carbon`.

### 7. Franja de validadores

- Fondo `--color-crema`.
- Altura compacta.
- Centrado: dos logos en escala de grises o monocromo `--color-tierra` — DOP Montes de Granada y DCOOP — separados por un divisor vertical sutil.
- Debajo de los logos, texto pequeño centrado: **"Aceite con denominación de origen, elaborado y certificado en Granada"**.

## Animaciones

- Fade-in suave al entrar cada bloque al viewport. Implementación con `IntersectionObserver` añadiendo clase `.es-visible` a la sección. CSS: opacidad 0 → 1, translateY 20px → 0, duración 600ms.
- En el bloque 3 (selector de uso) y 5 (virtudes): las tarjetas entran con stagger (50ms de retraso entre tarjeta y tarjeta).
- En la cronología: los puntos aparecen secuencialmente cuando el bloque entra en viewport.
- Hover en tarjetas: translateY(-4px) y sombra suave, transición 200ms.
- Hover en CTAs: oscurecer fondo ligeramente, transición 200ms.

## Imágenes a usar

| Posición | Archivo | Notas |
|---|---|---|
| Hero (vídeo) | `assets/videos/hero-referencia.mp4` | Vídeo de stock o referencia mientras no llegue el definitivo |
| Hero (poster) | `assets/images/hero/hero-fallback.jpg` | Foto del olivar a pantalla completa |
| Quiénes somos | `assets/images/about/cooperativa-exterior.jpg` | Foto del exterior de la almazara o de socios trabajando |
| Producto destacado | `assets/images/products/AoveUnicoFrutadoProduccionLimitada.png` | Imagen del producto Único Frutado |
| Iconos virtudes | `assets/images/icons/montana.svg`, `cooperativa.svg`, `medioambiente.svg` | SVG simples, monocromo |
| Iconos selector | `assets/images/icons/cocinar.svg`, `crudo.svg`, `regalo.svg` | SVG simples, monocromo |
| Sellos | `assets/images/certifications/dop-montes-granada.svg`, `dcoop.svg` | Logos oficiales |

## Lo que NO hay en esta página

- No hay testimonios. No los tenemos verificados.
- No hay premios. La cooperativa no los tiene.
- No hay menciones a exportación.
- No hay valores analíticos (acidez, polifenoles).
- No hay blog ni últimas entradas.
- No hay newsletter.

## Resultado esperado

Una home que se lee de arriba abajo en 30-40 segundos, que comunica una cooperativa real con historia real, modernizada, con producto diferenciado y un sello de origen. Que el visitante salga con una de dos sensaciones: "quiero probar este aceite" o "quiero saber más sobre esta cooperativa". Ambas llevan a una página destino concreta vía CTA explícito.
