# Brief — La cooperativa (`la-cooperativa.html`)

> **Antes de empezar:** lee `.claude/PROJECT.md`.

## Objetivo de la página

Página de marca. El visitante viene a entender quiénes somos: historia, territorio, modernización, certificaciones. Aquí se cuenta toda la prueba real disponible. Sin proceso productivo (decisión del equipo: fuera).

Acción esperada al final: ir a la tienda de aceites con la confianza ya construida.

## Estructura de bloques (en orden de scroll)

### 1. Hero secundario

- Imagen de fondo a pantalla completa: `assets/images/about/cooperativa-hero.jpg` (vista del pueblo, almazara o olivar al amanecer).
- Overlay oscuro semitransparente: `rgba(26, 23, 27, 0.45)`.
- Altura del hero: 60vh en desktop, 50vh en mobile (más bajo que la home).
- Texto centrado:
  - Eyebrow: **"LA COOPERATIVA"**, color `--color-dorado`.
  - Titular: **"Una cooperativa hecha de campo, personas y tiempo"**
    - `--fuente-titular`, peso 500, ~52px desktop / ~32px mobile, color `--color-crema`.
  - Subtítulo: **"Desde 1963 en Montejícar, Granada"**
    - `--fuente-cuerpo`, ~18px, color `--color-crema`.

### 2. Historia narrativa (zig-zag texto-imagen)

- Fondo `--color-crema`.
- Eyebrow centrado: **"NUESTRA HISTORIA"**
- Titular centrado: **"Seis décadas de cooperativismo"**
- Cuatro bloques alternados. En desktop: bloque 1 texto-izq imagen-der, bloque 2 imagen-izq texto-der, bloque 3 texto-izq imagen-der, bloque 4 imagen-izq texto-der. En mobile: todos apilados con la imagen arriba.

**Bloque 2.1 — 1963 · El origen**
- Imagen: `assets/images/history-timeline/1963-origen.jpg` (foto histórica si la hay, si no foto de olivar viejo)
- Año en grande: **1963** en `--fuente-titular` peso 600, color `--color-dorado`, ~64px.
- Titular: **"Nace la cooperativa"**
- Cuerpo:
  > "Un grupo de familias olivareras de Montejícar decide unirse para transformar juntos su cosecha. Así nace nuestra cooperativa: una almazara cooperativa nacida del trabajo de sus socios, no de un proyecto empresarial externo."

**Bloque 2.2 — 2013 · Integración en DCOOP**
- Imagen: `assets/images/history-timeline/2013-dcoop.jpg` (foto de la sede o de la red cooperativa, si no, imagen de tanque de aceite o instalaciones)
- Año: **2013**
- Titular: **"Nos sumamos a DCOOP"**
- Cuerpo:
  > "Décadas después, la cooperativa se integra en DCOOP, la mayor cooperativa olivarera de España. Mantenemos nuestras raíces en Montejícar y ganamos una red de comercialización, técnica y conocimiento compartido."

**Bloque 2.3 — 2016-2020 · Traslado y modernización**
- Imagen: `assets/images/history-timeline/2016-traslado.jpg` (foto de la almazara actual o de instalaciones nuevas)
- Año: **2016-2020**
- Titular: **"Una nueva almazara"**
- Cuerpo:
  > "El pleno municipal aprueba en 2016 el traslado de la almazara fuera del núcleo urbano. Cuatro años después llega la subvención que lo hace realidad: 1,18 millones de euros para mejorar y optimizar la elaboración. Producir mejor, con mejores instalaciones."

**Bloque 2.4 — 2024 · Autoconsumo solar**
- Imagen: `assets/images/history-timeline/2024-fotovoltaica.jpg` (foto real de las placas solares en la almazara; si no, vista cenital o lateral del tejado)
- Año: **2024**
- Titular: **"Energía del sol para nuestro aceite"**
- Cuerpo:
  > "Instalamos placas fotovoltaicas para autoconsumo en la almazara. Un paso más en la línea que ya veníamos siguiendo con las ayudas REACT-UE de 2022 y FEADER para la eficiencia energética del patio de limpieza."

> Nota técnica: si no se confirma el año 2024 con Carlos, sustituir el bloque 2.4 por **2023 — Eficiencia energética — "Modernizamos el patio de limpieza"** con texto centrado en la ayuda FEADER. La imagen sería entonces `history-timeline/2023-eficiencia.jpg`.

### 3. El olivar de montaña

- Fondo `--color-blanco`.
- Eyebrow centrado: **"NUESTRO TERRITORIO"**
- Titular: **"Aceite que solo se hace en la montaña"**
- Layout: dos columnas en desktop (texto izquierda, imagen grande derecha), una columna en mobile.
- Imagen: `assets/images/about/olivar-montana.jpg` (paisaje del olivar en altitud, con la sierra de fondo).
- Texto en 3 párrafos cortos + lista de datos clave:
  > "Nuestros olivares crecen a más de 900 metros de altitud, en los Montes de Granada. Es uno de los enclaves olivareros más altos de la península ibérica.
  >
  > La altitud y el frío del invierno hacen que la aceituna madure despacio. Es una maduración lenta, paciente, que concentra los aromas y deja un aceite con cuerpo y personalidad.
  >
  > El resultado, año tras año:"

- Lista de 4 datos en grid (2x2 en desktop, 1 columna en mobile):

| Dato grande | Detalle |
|---|---|
| **+900 m** | de altitud media |
| **+80%** | de ácido oleico |
| **<0,3°** | de acidez típica |
| **DOP** | Montes de Granada |

Cada dato: número en grande `--fuente-titular` peso 600 ~48px, color `--color-dorado`; detalle debajo en `--fuente-cuerpo` ~14px.

### 4. Modernización y medio ambiente

- Fondo `--color-oliva-oscuro`. Texto en `--color-crema`.
- Eyebrow: **"COMPROMISO"** color `--color-dorado`.
- Titular: **"Modernizamos nuestra almazara con la mirada en el futuro"**
- Layout: imagen grande izquierda (placas solares), texto derecha en mobile invertido.
- Imagen: `assets/images/about/placas-solares.jpg` (foto real de las placas en el tejado).
- Texto:
  > "La modernización de la almazara no fue solo de máquinas. Fue también de cómo producimos. Hoy una parte significativa de la energía que consumimos viene de nuestras propias placas solares, instaladas en el tejado de la almazara.
  >
  > Producir aceite de calidad sin desentenderse del entorno donde se cultiva la materia prima es algo que va con nuestra forma de entender la cooperativa."

- Debajo, una línea de tres validaciones públicas en grid horizontal (sello + texto):
  - **2020** — Subvención de modernización (1.186.092,95 €)
  - **2022** — Ayuda REACT-UE por sobrecoste energético
  - **2023-2024** — Eficiencia energética y autoconsumo

### 5. DOP y trazabilidad

- Fondo `--color-crema`.
- Eyebrow: **"GARANTÍA DE ORIGEN"**
- Titular: **"Aceite certificado de los Montes de Granada"**
- Layout dos columnas en desktop, una en mobile.
- Columna izquierda — texto:
  > "Somos miembros de la Denominación de Origen Protegida Montes de Granada. Eso significa que cada botella que sale de aquí está controlada en cada paso: desde la parcela hasta la envasadora.
  >
  > La contraetiqueta numerada que llevan nuestros aceites certificados no es decoración. Es la prueba de que ese lote concreto ha pasado los controles del consejo regulador."
- Columna derecha — diagrama de trazabilidad **estático ilustrado** (SVG):

  Cuatro puntos conectados horizontalmente con flechas:
  1. **🌳 Parcela** — "Plantaciones inscritas"
  2. **🏭 Almazara** — "Molturación certificada"
  3. **📦 Envasadora** — "Operador inscrito"
  4. **🍶 Tu mesa** — "Trazabilidad por lote"

  Cada punto: icono grande arriba (color `--color-dorado`), título, descripción de 1 línea. Las flechas en `--color-tierra`. **Sin paneles clicables, sin interactividad.** Es ilustración fija.

- Imagen complementaria pequeña abajo: `assets/images/certifications/dop-contraetiqueta.jpg` (foto cercana de una contraetiqueta numerada).

### 6. CTA final

- Fondo `--color-blanco`.
- Centrado.
- Titular: **"Prueba el aceite de nuestra cooperativa"**
- Subtítulo: "Venta directa desde la almazara, en cualquier formato."
- Dos botones lado a lado (o uno encima del otro en mobile):
  - Principal: **"Ver aceites"** → `tienda.html`, fondo `--color-dorado`.
  - Secundario: **"Visita la cooperativa"** → `contacto.html`, outline `--color-oliva-oscuro`.

## Animaciones

- Fade-in al entrar cada bloque (`IntersectionObserver` ya implementado en `scripts/main.js`).
- En la historia (bloque 2): los 4 bloques zig-zag aparecen con stagger de 100ms entre ellos.
- En el bloque del olivar (bloque 3): los 4 datos numéricos animan con un contador (0 → valor final) cuando entran en viewport. Duración 1,5s.

## Imágenes a usar

| Posición | Archivo | Notas |
|---|---|---|
| Hero | `assets/images/about/cooperativa-hero.jpg` | Vista del pueblo o almazara al amanecer |
| Historia 1963 | `assets/images/history-timeline/1963-origen.jpg` | Foto histórica o olivar antiguo |
| Historia 2013 | `assets/images/history-timeline/2013-dcoop.jpg` | Sede DCOOP o tanques de aceite |
| Historia 2016-2020 | `assets/images/history-timeline/2016-traslado.jpg` | Almazara actual o instalaciones nuevas |
| Historia 2024 | `assets/images/history-timeline/2024-fotovoltaica.jpg` | Placas solares (puede coincidir con la del bloque 4) |
| Olivar de montaña | `assets/images/about/olivar-montana.jpg` | Paisaje del olivar con sierra |
| Modernización | `assets/images/about/placas-solares.jpg` | Placas solares en tejado |
| Contraetiqueta DOP | `assets/images/certifications/dop-contraetiqueta.jpg` | Detalle de contraetiqueta numerada |
| Iconos trazabilidad | `assets/images/icons/parcela.svg`, `almazara.svg`, `envasado.svg`, `mesa.svg` | SVG simples monocromos |

Si alguna imagen no está disponible todavía, crear un placeholder con el nombre exacto. Design generará el código contra esos nombres y la imagen real se sustituye después.

## Lo que NO hay en esta página

- No hay proceso productivo (decisión del equipo: fuera).
- No hay premios. No los tenemos verificados.
- No hay cifras de socios sin fechar.
- No hay testimonios.
- No hay menciones a exportación.

## Resultado esperado

Una página que se lee en 60-90 segundos y deja claro: cooperativa de verdad, fundada en 1963, modernizada con ayudas públicas reales y autoconsumo solar, dentro de la DOP Montes de Granada, en un olivar de altitud. El visitante sale con una sensación: "esto es serio y tiene historia, no es marketing".
