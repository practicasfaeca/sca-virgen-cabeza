# Brief — Carrito (`carrito.html`)

> **Antes de empezar:** lee `.claude/PROJECT.md`.

## Objetivo de la página

Mostrar al usuario los productos que ha añadido, permitirle modificarlos y "finalizar el pedido". **Sin checkout real, sin pasarela de pago.** Al finalizar, se muestra un mensaje de confirmación in-page diciendo que se contactará al usuario por teléfono o correo.

Es el pieza más técnica del proyecto: depende de `localStorage` y de la lógica de `scripts/carrito.js`.

## Estructura de bloques

### 1. Hero corto

- Fondo `--color-crema`.
- Altura compacta ~25vh.
- Titular: **"Tu carrito"** en `--fuente-titular` peso 500, ~38px.
- Subtítulo dinámico:
  - Si hay productos: **"Revisa tu pedido antes de confirmarlo"**
  - Si está vacío: **"Aún no has añadido productos"**

### 2A. Vista con productos

- Fondo `--color-blanco`.
- Layout dos columnas en desktop (70/30: lista de productos a la izquierda, resumen a la derecha). En mobile: una columna, lista arriba, resumen abajo.

**Columna izquierda — Lista de productos:**

Cada item es una fila con:
- Imagen del producto (80x80 px, fondo `--color-crema`, border-radius 6px).
- Información del producto:
  - Nombre en `--fuente-titular` peso 500, ~18px.
  - Variedad + formato en `--fuente-cuerpo` ~14px, color `--color-tierra`.
  - Precio unitario en `--fuente-cuerpo` peso 500.
- Selector de cantidad (- número + ) en el centro.
- Subtotal (precio × cantidad) alineado a la derecha en `--fuente-titular` peso 600.
- Botón de eliminar (icono X o papelera) a la derecha del subtotal, color `--color-tierra`, hover `--color-oliva-oscuro`.

Separador sutil entre items.

**Columna derecha — Resumen del pedido (sticky en desktop):**

- Caja con fondo `--color-crema`, padding 24px, border-radius 8px.
- Título: **"Resumen del pedido"** en `--fuente-titular` peso 500, ~20px.
- Líneas:
  - Subtotal: XX,XX €
  - Envío: **"Recogida gratuita en cooperativa"** (texto verde `--color-oliva-oscuro`, no es un coste)
- Separador.
- Total grande: XX,XX € en `--fuente-titular` peso 600, ~28px, color `--color-carbon`.
- Texto pequeño debajo:
  > "El precio incluye IVA."
- Botón principal: **"Finalizar pedido"** ancho completo, fondo `--color-oliva-oscuro`, texto `--color-crema`, padding generoso, ~16px.
- Enlace secundario debajo del botón, centrado: **"← Seguir comprando"** → `tienda.html`.

### 2B. Vista carrito vacío

(Se muestra en lugar del bloque 2A cuando `localStorage` está vacío.)

- Fondo `--color-blanco`.
- Layout centrado vertical y horizontal.
- Padding generoso, ~80px arriba y abajo.
- Icono grande (carrito vacío, SVG en `--color-tierra`), ~96px.
- Titular: **"Tu carrito está vacío"** en `--fuente-titular` ~28px.
- Subtítulo:
  > "Cuando añadas aceites desde la tienda, aparecerán aquí."
- Botón: **"Ir a la tienda"** → `tienda.html`, fondo `--color-dorado`.

### 2C. Vista de pedido confirmado (modal o pantalla completa)

(Se muestra al pulsar "Finalizar pedido" desde la vista 2A.)

Mejor implementación: **reemplazar el contenido principal de la página** (no modal flotante), para que sea claro y no se pueda cerrar accidentalmente.

- Fondo `--color-crema`.
- Centrado vertical y horizontal, mínimo 60vh.
- Icono grande de check (✓) en círculo de `--color-dorado`, ~96px.
- Titular: **"¡Pedido recibido!"** en `--fuente-titular` peso 500, ~36px, color `--color-oliva-oscuro`.
- Subtítulo:
  > "Hemos guardado tu pedido. Te contactaremos por teléfono o correo en menos de 24 horas para confirmar la disponibilidad, el método de pago y la entrega."
- **Bloque de datos del pedido** en caja con fondo `--color-blanco`, padding 24px, border-radius 8px, max-width 500px:
  - **Número de pedido:** generado al vuelo, ej. `MTJ-20251114-0042`. Patrón: `MTJ-fecha-númeroAleatorio`.
  - **Productos:** lista resumida (nombre + cantidad).
  - **Total:** XX,XX €.
- Caja secundaria con instrucciones de contacto:
  - 📞 **¿Quieres contactarnos antes?** [Teléfono]
  - ✉️ **¿Prefieres correo?** [Correo]
- Botón secundario: **"Volver a la tienda"** → `tienda.html`.

**Importante:** al llegar a esta vista, se debe vaciar el `localStorage` del carrito (el pedido ya está "enviado" simbólicamente).

## Comportamiento JS (`scripts/carrito.js`)

```javascript
// Estructura del carrito en localStorage
{
  productos: [
    { id: 'aove-coupage-1l', cantidad: 2, precio: 12.50 },
    { id: 'unico-frutado', cantidad: 1, precio: 18.00 }
  ]
}
```

**Funciones esperadas:**

- `obtenerCarrito()` → lee de localStorage y devuelve el objeto.
- `añadirProducto(id, cantidad)` → añade o suma si ya existe.
- `eliminarProducto(id)` → elimina del array.
- `actualizarCantidad(id, cantidad)` → modifica cantidad (si llega a 0, elimina).
- `vaciarCarrito()` → borra el localStorage del carrito.
- `calcularTotal()` → suma todos los subtotales.
- `actualizarContadorHeader()` → actualiza el contador del icono del carrito en el header de todas las páginas.

**En `carrito.html` específicamente:**

- Al cargar la página, leer el carrito y renderizar la vista 2A o 2B.
- Cada cambio de cantidad o eliminación recalcula totales y re-renderiza.
- El botón "Finalizar pedido" genera un número de pedido, muestra la vista 2C y vacía el `localStorage`.
- Si el usuario refresca tras finalizar, vuelve a ver la vista 2B (vacío) — es coherente con la realidad de que ya envió el pedido.

## Animaciones

- Al añadir un producto desde otra página, el icono del carrito del header hace un "bounce" sutil.
- Al eliminar un producto del carrito: la fila se desliza a la derecha con fade out, 250ms, y desaparece.
- Al cambiar cantidad: el subtotal se actualiza con un pequeño "tick" visual (color flash a `--color-dorado` durante 200ms).
- Transición a la vista de confirmación: fade out de la vista actual, fade in de la confirmación, 400ms.

## Imágenes a usar

- Las miniaturas de producto se cargan dinámicamente desde la misma carpeta `assets/images/products/` que la tienda.
- Icono de carrito vacío: SVG en `assets/images/icons/carrito-vacio.svg`.
- Icono de check para confirmación: SVG en `assets/images/icons/check.svg`.

## Lo que NO hay en esta página

- No hay pasarela de pago (Stripe, Redsys, PayPal). Decisión del equipo: solo prototipo, el pedido se confirma por teléfono o correo.
- No hay formulario de datos de envío. No es necesario sin pago real.
- No hay cupones ni códigos de descuento.
- No hay cálculo de envío por código postal.
- No hay registro/login. La sesión es anónima, gestionada por `localStorage`.
- No hay historial de pedidos. Cada pedido es independiente.

## Resultado esperado

Un carrito **funcional y honesto**: permite simular la compra sin engañar al usuario sobre que es solo un prototipo. La vista de confirmación deja claro que el contacto real será humano. Persistencia entre sesiones gracias a `localStorage`: el usuario puede cerrar el navegador y al volver mañana sigue teniendo su carrito.
