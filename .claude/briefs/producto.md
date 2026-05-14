# Brief — Producto (`producto.html`)

> **Antes de empezar:** lee `.claude/PROJECT.md`.

## Objetivo de la página

**Plantilla única** que sirve para los 7 SKUs de aceite. Recibe un parámetro de URL `?id=<producto-id>` y carga el contenido correspondiente con JavaScript desde un objeto de datos (o desde un JSON de catálogo).

Ficha **corta y directa**: cabecera con foto + info esencial + botón añadir al carrito, notas de cata en acordeón cerrado, productos relacionados. Sin "Para qué lo uso", sin "De dónde viene".

## Estructura de bloques

### 1. Migas de pan (breadcrumb)

- Fondo `--color-crema`.
- Texto pequeño en `--color-tierra`:
  > Inicio › Aceites › **[Nombre del producto]**
- Cada eslabón es un enlace excepto el último.

### 2. Cabecera del producto

- Fondo `--color-blanco`.
- Layout dos columnas en desktop (50/50), una columna en mobile.

**Columna izquierda — Galería de imágenes:**

- Imagen principal grande, altura ~500px, `object-fit: contain`, fondo `--color-crema` con border-radius 8px.
- Debajo, hasta 3 miniaturas alineadas horizontalmente (80x80px). Al hacer click, sustituyen la imagen principal con fade suave.
- Si solo hay una imagen (caso típico): no se muestran miniaturas.

**Columna derecha — Información:**

- Etiquetas pequeñas arriba (chips de 11px): variedad + formato. Ej: `Picual` `5 L`.
- Nombre del producto en `--fuente-titular` peso 500, ~38px, color `--color-oliva-oscuro`.
- Descripción larga (2-3 líneas) en `--fuente-cuerpo` peso 400, ~16px.
- Línea separadora sutil.
- **Selector de formato** (solo si el producto tiene varios formatos): chips de 250 ml / 1 L / 5 L. Al cambiar, actualiza el precio y la imagen.
- **Precio** grande en `--fuente-titular` peso 600, ~32px.
- **Selector de cantidad**: campo numérico con botones - y + a los lados (mínimo 1, máximo 99).
- **Botón principal**: **"Añadir al carrito"** ocupando ancho completo, fondo `--color-oliva-oscuro`, texto `--color-crema`, padding generoso, ~16px.
- **Información complementaria** en lista pequeña debajo del botón (iconos + texto, fuente pequeña, color `--color-tierra`):
  - 🚚 Envío en 24-48h en península
  - 📍 Recogida gratuita en cooperativa
  - 🔒 Pago seguro
  - ✅ Producto certificado DOP Montes de Granada

### 3. Notas de cata (acordeón cerrado por defecto)

- Fondo `--color-crema`.
- Bloque centrado con ancho máximo (no full-width).
- Título del bloque: **"Notas de cata"** en `--fuente-titular` peso 500, ~24px.
- Texto introductorio pequeño:
  > "Despliega cada fase para conocer mejor este aceite."
- **Cuatro filas de acordeón**, todas cerradas inicialmente. Cabecera con icono pequeño + nombre de fase + flecha que rota al abrir.

**Filas:**

1. **👁 Fase visual** (cerrado)
   - Contenido: color, limpidez. Ej: *"Color amarillo verdoso con reflejos dorados. Limpio y brillante."*
2. **👃 Fase olfativa** (cerrado)
   - Contenido: aromas principales. Ej: *"Frutado intenso de aceituna verde, con notas de hierba recién cortada, hoja de olivo y un toque a tomatera."*
3. **👅 Fase gustativa** (cerrado)
   - Contenido: amargor, picor, frutado. Ej: *"Amargo medio y picante intenso, equilibrados. Frutado verde persistente, con un final ligeramente almendrado."*
4. **🏠 La cata en casa** (cerrado)
   - Contenido: cómo probarlo bien en casa. Ej: *"Sirve unas cucharadas en un vaso de cristal. Tápalo con la mano y caliéntalo unos segundos al calor de la palma. Destapa, huele y bebe un sorbo pequeño. Hazlo siempre antes de cocinar para apreciar los matices."*

- Animación de despliegue: altura 0 → auto con `transition` de 300ms.

### 4. Productos relacionados

- Fondo `--color-blanco`.
- Eyebrow: **"TAMBIÉN TE PUEDE INTERESAR"**
- Titular: **"Otros aceites de la cooperativa"**
- Grid de 3 tarjetas (1 columna en mobile, 3 en desktop).
- Las tarjetas son **idénticas a las del catálogo** de la tienda (mismo estilo, mismo comportamiento de "Añadir al carrito").
- Lógica de selección: 3 productos del catálogo distintos al actual. Preferentemente del mismo tipo (si el actual es picual, mostrar otros picuals; si es coupage, otros coupages; etc.). Si no hay suficientes del mismo tipo, completar con destacados.

### 5. CTA inferior — Confianza

- Fondo `--color-oliva-oscuro`. Texto `--color-crema`.
- Altura compacta, centrado.
- Tres iconos en grid horizontal (3 columnas desktop, 1 mobile), texto debajo de cada uno:
  - 🌳 **"Aceite de montaña"** — "Olivar a más de 900 metros"
  - 🏆 **"DOP Montes de Granada"** — "Certificación de origen"
  - 🤝 **"Cooperativa familiar"** — "Desde 1963 en Montejícar"

## Comportamiento JS

- Al cargar la página, leer parámetro `?id=` de la URL.
- Buscar el producto en un objeto/array central (puede vivir en `scripts/main.js` o en un `data/productos.json`).
- Rellenar todos los campos: nombre, descripción, imagen, formatos disponibles, precio, notas de cata.
- Si el `id` no existe o no se pasa, redirigir a `tienda.html`.
- **Selector de formato**: al cambiar, actualiza precio e imagen. No recarga la página.
- **Botón Añadir al carrito**: añade a `localStorage` (manejado por `scripts/carrito.js`). Toast de confirmación abajo.
- **Acordeones de cata**: click en cabecera abre/cierra. Solo uno abierto a la vez (al abrir uno, se cierran los otros) — opcional, también acepta múltiples abiertos a la vez.

## Estructura de datos (sugerida para `scripts/main.js` o `data/productos.json`)

```javascript
const catalogo = {
  'aove-coupage-1l': {
    nombre: 'AOVE Coupage Cooperativa',
    variedad: 'Coupage',
    formatos: [
      { formato: '1 L', precio: 'XX,XX €', imagen: 'aove-coupage-1l.jpg' },
      { formato: '5 L', precio: 'XX,XX €', imagen: 'aove-coupage-5l.jpg' }
    ],
    descripcion: 'Nuestro coupage equilibrado, hecho con las variedades del olivar de Montejícar. Aceite del día a día, versátil para guisos, sofritos y fritos.',
    cata: {
      visual: '[...]',
      olfativa: '[...]',
      gustativa: '[...]',
      cataCasa: '[...]'
    },
    relacionados: ['olixicar-5l', 'dcoop-especial-1l', 'unico-frutado']
  },
  // ... resto de productos
};
```

> El equipo rellena el copy de las notas de cata producto a producto. La plantilla soporta cualquier texto.

## Animaciones

- Fade-in al cargar la página, escalonado entre cabecera y bloques inferiores.
- Cambio de imagen en galería: crossfade suave de 200ms.
- Acordeón: expansión de altura con `transition`, 300ms.
- Botón "Añadir al carrito": al hacer click, animación de "ondas" sutil + el icono del carrito del header hace bounce.

## Imágenes a usar

Las mismas que las tarjetas del catálogo (ver brief de `tienda.md`). La imagen principal del producto + imágenes secundarias si existen.

## Lo que NO hay en esta página

- No hay bloque "Para qué lo uso" (decisión del equipo: fuera, redundante con el selector de la home).
- No hay bloque "De dónde viene" (decisión del equipo: fuera, redundante con la página de la cooperativa).
- No hay reviews ni testimonios.
- No hay "comprar también" cross-selling agresivo.
- No hay valores analíticos por SKU (acidez, peróxidos, polifenoles) — restricción de PROJECT.md: no tenemos esos datos públicos.

## Resultado esperado

Una ficha de producto **directa y útil**. Quien quiere comprar, lo hace en 5 segundos. Quien quiere saber del aceite, despliega las notas de cata y aprende algo. Sin paja, sin bloques de relleno, sin esconder lo importante.
