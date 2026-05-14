# Brief — Productos agrícolas (`productos-agricolas.html`)

> **Antes de empezar:** lee `.claude/PROJECT.md`.

## Objetivo de la página

**Catálogo escaparate**, no tienda online. Mostrar a los socios y visitantes los productos agrícolas que la cooperativa suministra desde la tienda física. **No tiene carrito ni botón de compra**: los productos se consultan y se compran presencialmente en la cooperativa.

Esta página refuerza el posicionamiento de "cooperativa real": no solo vendemos aceite a consumidores finales, también surtimos a nuestros socios olivareros.

## Estructura de bloques

### 1. Hero corto

- Fondo `--color-crema`.
- Altura ~30vh.
- Eyebrow: **"PRODUCTOS AGRÍCOLAS"**, color `--color-dorado`.
- Titular: **"Todo lo que necesita el olivar"**
- Subtítulo:
  > "Suministramos a nuestros socios y al agricultor de la zona. Disponibles para compra directa en la cooperativa."

### 2. Banda de aviso "Solo en tienda física"

- Fondo `--color-tierra` con opacidad ligera (~10%) o `--color-gris-suave`.
- Banner horizontal compacto, padding generoso vertical.
- Icono a la izquierda (pin de ubicación, SVG simple en `--color-oliva-oscuro`).
- Texto:
  > **"Estos productos solo se venden en nuestras instalaciones."** Para consultar disponibilidad o precios, llámanos o pásate por la cooperativa.
- Botón a la derecha: **"Ver cómo llegar"** → enlace a `contacto.html`.

### 3. Filtros por categoría

- Fondo `--color-blanco`.
- Chips horizontales, sticky en desktop al hacer scroll:
  - Todas | Vareo | Fitosanitarios | Nutrición agrícola | Accesorios | Repuestos
- Mismo estilo que los chips de la tienda de aceite (pill, borde `--color-tierra`, activo con fondo `--color-oliva-oscuro`).

### 4. Grid de productos por categoría

- Fondo `--color-crema`.
- Las categorías se muestran agrupadas: cada categoría tiene su título (`--fuente-titular`, peso 500, ~28px) y debajo el grid de productos.
- Cuando se aplica un filtro, se ocultan las otras categorías enteras.

**Estructura de cada sección de categoría:**

#### 4.1 Vareo
- Imagen de cabecera de categoría: `assets/images/agricolas/vareo-cat.jpg` (foto general de productos de vareo en uso).
- Descripción breve (1 frase):
  > "Todo lo necesario para la recogida tradicional de la aceituna."
- Grid de 3 productos:
  - **Manta de vareo** — `vareo-manta.jpg` — "Mantas de gran formato para extender bajo el olivo y recoger la aceituna."
  - **Rastrillo de vareo** — `vareo-rastrillo.jpg` — "Rastrillo manual para terminar de bajar la aceituna y agruparla."
  - **Vara** — `vareo-vara.jpg` — "Varas de distintas medidas para el vareo tradicional."

#### 4.2 Fitosanitarios
- Imagen cabecera: `agricolas/fitosanitarios-cat.jpg`
- Descripción:
  > "Productos para el tratamiento de plagas y enfermedades del olivar."
- Grid de 3 productos:
  - **Fungicidas** — `fitosanitarios-fungicida.jpg` — "Tratamientos contra hongos y enfermedades fúngicas."
  - **Herbicidas** — `fitosanitarios-herbicida.jpg` — "Control de hierbas competidoras del olivar."
  - **Insecticidas** — `fitosanitarios-insecticida.jpg` — "Para plagas comunes como mosca del olivo, polilla y prays."

#### 4.3 Nutrición agrícola
- Imagen cabecera: `agricolas/nutricion-cat.jpg`
- Descripción:
  > "Abonos y fertilizantes para mantener el vigor del olivar."
- Grid de 2 productos:
  - **Abonos** — `nutricion-abono.jpg` — "Abonos orgánicos y minerales para fertilización de fondo."
  - **Fertilizantes** — `nutricion-fertilizante.jpg` — "Fertilizantes específicos para olivar adultos y plantaciones jóvenes."

#### 4.4 Accesorios agrícolas
- Imagen cabecera: `agricolas/accesorios-cat.jpg`
- Descripción:
  > "Material complementario para el trabajo en el campo."
- Grid de 2 productos:
  - **Capazos** — `accesorios-capazo.jpg` — "Capazos de distintos tamaños para recolección manual."
  - **Guantes de trabajo** — `accesorios-guantes.jpg` — "Guantes resistentes para faenas del campo."

#### 4.5 Repuestos de maquinaria
- Imagen cabecera: `agricolas/repuestos-cat.jpg`
- Descripción:
  > "Piezas y componentes para mantenimiento de maquinaria agrícola común en el olivar."
- Grid de 1 producto (o más si se amplía):
  - **Repuestos varios** — `repuestos.jpg` — "Pasa por la cooperativa para consultar disponibilidad de piezas específicas."

**Tarjeta de producto (sin botón de compra):**

- Fondo `--color-blanco`, borde sutil `1px solid --color-gris-suave`, padding 20px.
- Imagen del producto centrada arriba, altura fija ~220px, `object-fit: contain`.
- Nombre del producto en `--fuente-titular` peso 500, ~20px, color `--color-oliva-oscuro`.
- Descripción de 1 línea en `--fuente-cuerpo` ~14px, color `--color-tierra`.
- En lugar de botón "Añadir al carrito": etiqueta pequeña al final con icono + texto: **"📍 Disponible en la cooperativa"**.
- Hover suave (translateY -2px), sin sombra agresiva. Las tarjetas no son clicables: no llevan a ficha.

> **Decisión técnica:** estos productos no tienen ficha de producto propia. Son catálogo de referencia, no e-commerce. Si más adelante se quisiera ficha individual, se añade con una variante de `producto.html?tipo=agricola`.

### 5. CTA final — "Cómo comprar"

- Fondo `--color-oliva-oscuro`. Texto en `--color-crema`.
- Layout dos columnas en desktop, una en mobile.
- Columna izquierda — texto:
  - Titular: **"¿Te interesa algún producto?"**
  - Cuerpo:
    > "Pásate por la cooperativa o llámanos. Atendemos en horario de almazara y campaña."
- Columna derecha — datos de contacto en bloque destacado:
  - 📍 **Cooperativa Virgen de la Cabeza** — Montejícar, Granada
  - 📞 **[Teléfono]** — [PENDIENTE]
  - ✉️ **[Correo]** — [PENDIENTE]
  - 🕐 **Horario** — [PENDIENTE]
- Botón al final: **"Ver mapa y contacto"** → `contacto.html`. Fondo `--color-dorado`.

## Animaciones

- Fade-in al entrar cada sección de categoría.
- Stagger entre tarjetas: 50ms.
- Filtrado: las categorías excluidas se hacen `display: none` con animación de altura.

## Imágenes a usar

Todas en `assets/images/agricolas/`. Para cada categoría hace falta una foto de cabecera + una foto por producto. Si alguna foto específica no está, usar la foto de cabecera de la categoría como placeholder.

## Lo que NO hay en esta página

- No hay botón "Añadir al carrito" (los productos no se venden online).
- No hay precios (varían y se consultan en persona).
- No hay fichas individuales de producto agrícola.
- No hay filtros por precio ni por marca.
- No hay buscador.

## Resultado esperado

Una página de catálogo limpia que comunica que la cooperativa **suministra al campo**, no solo vende aceite. Refuerza la imagen de cooperativa real y completa, sin pretender ser una tienda online. El visitante interesado sale con la información clara: para comprar, hay que ir a la cooperativa.
