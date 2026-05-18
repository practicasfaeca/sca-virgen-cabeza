# Brief: Página Tienda

## Propósito

Página única donde el usuario compra los aceites de oliva virgen extra de la cooperativa. Sustituye la separación anterior entre página de tienda y ficha individual de producto: ahora todo vive aquí, y la información detallada de cada aceite se abre en un modal sobre la propia tienda.

Los productos agrícolas no aparecen en esta página. Tienen su propia página (`productos-agricolas.html`) y son catálogo escaparate sin compra online.

## Estructura de la página

La página se compone de cinco bloques verticales, en este orden:

1. Hero corto
2. Categoría: Para el día a día
3. Categoría: Para disfrutar en crudo
4. Categoría: Para regalar
5. Banda final con Único Frutado destacado

No hay filtros desplegables ni barra de búsqueda. La agrupación visual por categorías sustituye a los filtros.

## Bloque 1 — Hero corto

Altura aproximada de 40 vh (no pantalla completa, esto no es la home). Fondo con imagen de aceitunas o de la almazara, oscurecida ligeramente para que el texto sea legible.

**Título:** Compra aceite directamente en origen

**Subtítulo:** Recibe en casa el aceite de oliva virgen extra de nuestra cooperativa. Venta directa desde Montejícar, en el corazón de los Montes de Granada.

Sin botón. El usuario hace scroll y entra directamente en las categorías.

## Bloques 2, 3 y 4 — Las tres categorías

Cada categoría tiene la misma estructura:

- Título grande de la categoría (Cormorant Garamond).
- Una línea breve de descripción debajo (Inter, color secundario).
- Grid de tarjetas con los aceites de esa categoría.

### Categoría: Para el día a día

> Aceites equilibrados y versátiles, pensados para la cocina diaria. Ideales para guisos, fritos y aliños cotidianos.

**Aceites a mostrar en esta categoría:**

- AOVE Coupage 1 kg
- AOVE Coupage 5 kg
- Olixicar Picual 5 kg

### Categoría: Para disfrutar en crudo

> Monovarietales con carácter, para realzar platos sin cocinar. Tostadas, ensaladas, carpaccios, gazpachos.

**Aceites a mostrar en esta categoría:**

- DCOOP Selección Picual 500 ml
- Olixicar Picual 500 ml

### Categoría: Para regalar

> Nuestras referencias más cuidadas, en formatos y presentaciones especiales. También perfectas para ocasiones a las que quieras dar un toque distinto.

**Aceites a mostrar en esta categoría:**

- Único Frutado Hojiblanca temprana 500 ml
- Único Frutado Hojiblanca temprana (estuche regalo)

> **Nota para el equipo:** la asignación de los 7 SKUs a cada categoría es orientativa según el catálogo público actual descrito en el informe de investigación. La cooperativa debe confirmar formatos definitivos y precios antes del lanzamiento.

## Tarjeta de producto

Cada aceite se presenta en una tarjeta dentro del grid de su categoría. Estructura de la tarjeta:

1. **Imagen del producto** en la parte superior, cuadrada o ligeramente vertical. Fondo neutro, idealmente con la botella sobre fondo crema o blanco roto.
2. **Nombre del aceite** en Cormorant Garamond, tamaño mediano.
3. **Variedad y formato** debajo, en Inter pequeño y color secundario (ej: "Picual · 500 ml").
4. **Precio** en Inter, peso medio, color oscuro.
5. **Botón "Añadir al carrito"** de ancho completo, color dorado de marca.

Toda la tarjeta es clicable: hacer clic en cualquier zona que no sea el botón abre el modal con la información completa del aceite. El botón solo añade al carrito sin abrir nada, mostrando una pequeña notificación flotante de confirmación (toast) en la esquina inferior.

## El modal de producto

Cuando el usuario hace clic en una tarjeta, aparece un modal flotante sobre la tienda. El fondo de la página se oscurece ligeramente con un velo semitransparente. El modal se cierra con una X arriba a la derecha, con clic fuera del modal o con la tecla Escape.

Si el usuario está en móvil, el modal ocupa prácticamente toda la pantalla. En escritorio, queda centrado y con un ancho máximo de unos 900 px.

### Contenido del modal

Estructura en dos columnas en escritorio (imagen izquierda, info derecha), apiladas en móvil:

**Columna izquierda — Imagen principal**

Imagen grande del producto. Sin galería con miniaturas: una sola imagen bien hecha.

**Columna derecha — Información**

1. **Nombre del aceite** grande, Cormorant Garamond.
2. **Variedad · Formato** en línea pequeña debajo.
3. **Precio** destacado.
4. **Selector de cantidad** (− 1 +) y **botón "Añadir al carrito"** de ancho completo.
5. **Bloque de intensidad** (ver siguiente sección).
6. **Descripción breve** del aceite en uno o dos párrafos (3-5 líneas máximo).
7. **Recomendación de uso** en una línea destacada (ej: "Perfecto para tostadas, gazpachos y aliños en crudo").

No hay sección de productos relacionados dentro del modal. Cerrar el modal devuelve al usuario a la tienda, donde puede ver el resto.

### Bloque de intensidad

Este es el elemento diferenciador de la web. Va dentro del modal, después del botón de compra y antes de la descripción.

**Estructura visual:**

```
Intensidad

Suave  ○━━━━━━━●━━━━  Intenso

Equilibrado · Frutado · Picor medio
```

- Título "Intensidad" en mayúsculas pequeñas o Cormorant pequeño.
- Una línea horizontal (la barra) con dos etiquetas en los extremos: "Suave" a la izquierda, "Intenso" a la derecha.
- Un círculo relleno (color dorado de marca) posicionado en la barra según la intensidad del aceite. La posición se define con un porcentaje de 0 a 100, donde 0 es totalmente suave y 100 totalmente intenso.
- Debajo de la barra, tres palabras descriptivas separadas por puntos (·). Estas tres palabras resumen el perfil organoléptico de ese aceite concreto.

**Comportamiento:** la barra es estática (no interactiva, solo informativa). No tiene tooltip ni hover. Es una visualización clara y directa.

**Valores orientativos por aceite** (la cooperativa debe validar):

| Aceite | Posición en la barra | Tres palabras |
|---|---|---|
| AOVE Coupage 1 kg / 5 kg | 35-40 % | Equilibrado · Frutado · Suave |
| Olixicar Picual 5 kg | 70 % | Intenso · Picual · Vigoroso |
| Olixicar Picual 500 ml | 70 % | Intenso · Picual · Vigoroso |
| DCOOP Selección Picual | 80 % | Robusto · Profundo · Picor alto |
| Único Frutado Hojiblanca temprana | 75 % | Frutado · Amargor medio · Cuerpo |

## Bloque 5 — Banda final con Único Frutado

Al final de la página, después de las tres categorías, una banda horizontal destacada del Único Frutado. Esta banda no es una tarjeta más: es un bloque de página completa con tratamiento especial.

**Estructura:**

- Fondo con color sólido oscuro (verde oliva profundo o tono tierra de marca).
- A la izquierda, imagen del Único Frutado en formato vertical más grande de lo habitual.
- A la derecha, texto:
  - Etiqueta pequeña en dorado: "Edición limitada"
  - Título: "Único Frutado"
  - Texto: Hojiblanca de recolección temprana, seleccionada de los mejores lotes del inicio de campaña. Una edición limitada con el carácter más fresco y vigoroso del año.
  - Botón "Ver detalle" que abre el modal del Único Frutado.

## Comportamiento del carrito

Cuando el usuario pulsa "Añadir al carrito" desde cualquier tarjeta o desde el modal:

1. El producto se añade al estado del carrito (gestionado con localStorage para que persista entre páginas).
2. Aparece un toast en la esquina inferior derecha durante 3 segundos: "AOVE Coupage 1 kg añadido al carrito" con un enlace "Ver carrito".
3. El icono del carrito en el header actualiza el contador.

La página tienda no muestra el carrito completo. El usuario llega al carrito desde el icono del header.

## Imágenes necesarias

Carpeta `assets/images/products/`:

- `coupage-1kg.jpg`
- `coupage-5kg.jpg`
- `olixicar-5kg.jpg`
- `olixicar-500ml.jpg`
- `dcoop-seleccion.jpg`
- `unico-frutado.jpg`
- `unico-frutado-estuche.jpg`
- `unico-frutado-banda.jpg` (versión vertical grande para la banda final)

Carpeta `assets/images/hero/`:

- `tienda-hero.jpg` (imagen para el hero corto de la tienda)

Todas las imágenes JPG comprimidas por debajo de 300 KB. Las imágenes de tarjetas con un mínimo de 600 px de ancho. La imagen de la banda final con un mínimo de 800 px de alto.

Si alguna imagen aún no está disponible, crear un placeholder con el nombre exacto del archivo para que el código no se rompa.

## Especificaciones técnicas

**HTML:** una sola página `tienda.html` con todo el contenido de los 7 aceites embebido (no se cargan dinámicamente desde JSON externo). El modal está en el HTML pero oculto con `display: none` hasta que se activa.

**CSS:** estilos específicos en `styles/paginas.css`. Componentes reutilizables (tarjeta, botón, toast) en `styles/componentes.css`.

**JavaScript:** lógica en `scripts/catalogo.js` para abrir/cerrar el modal según el aceite clicado, y en `scripts/carrito.js` para gestionar el localStorage del carrito.

**Animaciones:**

- Apertura del modal: fade-in del velo de fondo (200 ms) + scale-up suave del modal (300 ms desde 0.95 a 1).
- Cierre: animaciones inversas.
- Toast: slide-in desde la derecha (200 ms), pausa de 3 segundos, slide-out.

Nada más. Sin animaciones de scroll, sin parallax, sin efectos de hover sofisticados. Hover básico en tarjetas (ligera elevación con sombra).

## Accesibilidad

- El modal debe ser navegable con teclado (Tab para moverse, Escape para cerrar).
- El foco se atrapa dentro del modal mientras está abierto.
- Las imágenes tienen `alt` descriptivo.
- Los botones tienen `aria-label` cuando solo contienen iconos.

## Lo que NO va en esta página

- Filtros desplegables por variedad o formato.
- Barra de búsqueda.
- Sección de productos relacionados dentro del modal.
- Galería con miniaturas en el modal.
- Productos agrícolas.
- Información técnica analítica (acidez, peróxidos, K232/K270). La cooperativa no la tiene publicada por SKU y el informe lo confirma.
- Reseñas de clientes (no hay testimonios documentados aún).
- Sistema de favoritos o wishlist.
