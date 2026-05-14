# Brief — Contacto (`contacto.html`)

> **Antes de empezar:** lee `.claude/PROJECT.md`.

## Objetivo de la página

Cerrar el círculo de la web: que el visitante pueda contactar con la cooperativa por todos los canales disponibles. Incluye el aviso legal con el CIF corregido (`F18005009`).

## Estructura de bloques

### 1. Hero corto

- Fondo `--color-crema`.
- Altura ~30vh.
- Centrado.
- Eyebrow: **"CONTACTO"**, color `--color-dorado`.
- Titular: **"Estamos cerca de ti"** en `--fuente-titular` peso 500, ~48px.
- Subtítulo:
  > "Por teléfono, por correo, o de visita en la almazara."

### 2. Mapa + formulario

- Fondo `--color-blanco`.
- Layout dos columnas en desktop (50/50), una columna en mobile (mapa arriba, formulario abajo).

**Columna izquierda — Mapa de Google embebido:**

- Iframe con altura ~500px en desktop, 350px en mobile.
- Centrado en la ubicación de la cooperativa: Montejícar, Granada.
- Marcador en la ubicación exacta de la almazara.
- Border-radius 8px, sin borde.

URL aproximada del embed (a refinar con la dirección exacta):
```html
<iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d...!2sMontejicar!5e0!3m2!1ses!2ses!4v..." 
  width="100%" height="500" 
  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
</iframe>
```

> El equipo busca la URL real del embed con la ubicación exacta de la almazara.

**Columna derecha — Formulario:**

- Caja con padding generoso (32px), fondo `--color-crema`, border-radius 8px.
- Título: **"Escríbenos"** en `--fuente-titular` peso 500, ~24px.
- Campos:
  - **Nombre** — input text, requerido.
  - **Correo** — input email, requerido.
  - **Teléfono** — input tel, opcional.
  - **Asunto** — select con opciones: "Información general", "Pedido", "Productos agrícolas", "Visitar la cooperativa", "Otro".
  - **Mensaje** — textarea, 5 líneas mínimo, requerido.
- Botón principal: **"Enviar mensaje"** ancho completo, fondo `--color-oliva-oscuro`, texto `--color-crema`.
- Texto pequeño debajo: *"Te responderemos en un plazo de 24-48 horas laborables."*

**Comportamiento del formulario:**

- Validación HTML5 nativa (`required`, `type="email"`, etc.).
- Al enviar, **NO procesar realmente**. Mostrar mensaje de éxito in-page: *"Mensaje enviado. Te responderemos pronto."* y limpiar el formulario.
- Para que envíe de verdad más adelante, integrar con Formspree, EmailJS o similar. Por ahora, simulación.

### 3. Información de contacto directo

- Fondo `--color-crema`.
- Eyebrow centrado: **"O CONTÁCTANOS DIRECTAMENTE"**
- Titular: **"Aquí tienes todos nuestros datos"**
- Grid de 4 tarjetas (2x2 en desktop, 1 columna en mobile).

**Tarjeta 1 — Dirección**
- Icono: 📍 (SVG simple, ~48px, color `--color-dorado`).
- Título: **"Dirección"**
- Contenido:
  > [Dirección de la almazara]
  > Montejícar, Granada
- Enlace: "Ver en Google Maps →"

**Tarjeta 2 — Teléfono**
- Icono: 📞
- Título: **"Teléfono"**
- Contenido: [Número de teléfono]
- Enlace: "Llamar ahora →" (con `tel:` href)

**Tarjeta 3 — Correo**
- Icono: ✉️
- Título: **"Correo electrónico"**
- Contenido: [Dirección de correo]
- Enlace: "Escribir un email →" (con `mailto:` href)

**Tarjeta 4 — Horario**
- Icono: 🕐
- Título: **"Horario de atención"**
- Contenido:
  > Lunes a Viernes
  > [Horario]
  >
  > En campaña de aceituna:
  > [Horario ampliado]

> Los corchetes [PENDIENTE] los rellena el equipo con los datos reales.

### 4. Visita la cooperativa

- Fondo `--color-oliva-oscuro`. Texto `--color-crema`.
- Layout dos columnas en desktop, una en mobile.
- Columna izquierda — imagen:
  - `assets/images/location/visita-cooperativa.jpg` (foto de la entrada de la almazara o de las instalaciones).
- Columna derecha — texto:
  - Titular: **"Pásate a vernos"** en `--fuente-titular`, ~36px.
  - Cuerpo:
    > "Estamos abiertos a quien quiera conocer cómo se hace nuestro aceite. Ven a recoger un pedido, prueba el aceite directamente del lagar o consulta cualquier duda sobre el olivar.
    >
    > Si vienes en grupo, llámanos antes y te organizamos una visita."
  - Botón: **"Llámanos para visitar"** con `tel:` href, fondo `--color-dorado`.

### 5. Aviso legal y datos corporativos

- Fondo `--color-crema`.
- Bloque centrado con padding generoso.
- Eyebrow: **"DATOS CORPORATIVOS"**, color `--color-dorado`.
- Tabla simple o lista de definiciones:
  - **Razón social:** Sociedad Cooperativa Andaluza Virgen de la Cabeza
  - **CIF:** `F18005009`
  - **Domicilio social:** [Dirección]
  - **Registro:** [Número de inscripción en el registro de cooperativas, si está disponible]
  - **Correo legal:** [Correo]
- Enlaces pequeños abajo a:
  - Aviso legal completo (puede ser modal o página `/aviso-legal.html` simple, **opcional para esta fase**)
  - Política de privacidad
  - Política de cookies

> **CRÍTICO según PROJECT.md:** el CIF correcto es **F18005009**, no `F18005099` como aparece en el aviso legal actual de scavirgendelacabeza.com. Hay que asegurar que aquí aparece el correcto.

## Animaciones

- Fade-in al entrar cada bloque.
- Hover en las tarjetas de contacto: levantamiento sutil (translateY -3px).
- Validación del formulario: campos en error con borde rojo suave y mensaje pequeño debajo.

## Imágenes a usar

| Posición | Archivo | Notas |
|---|---|---|
| Visita cooperativa | `assets/images/location/visita-cooperativa.jpg` | Foto exterior almazara o instalaciones |
| Iconos contacto | `assets/images/icons/pin.svg`, `phone.svg`, `mail.svg`, `clock.svg` | SVG simples, monocromos |

## Lo que NO hay en esta página

- No hay chat en vivo. No tenemos infraestructura para ello.
- No hay integración con WhatsApp Business (puede añadirse como mejora posterior con un simple `wa.me/[número]` si el equipo lo decide).
- No hay formulario con captcha avanzado. La validación HTML5 + la simulación basta para prototipo.

## Resultado esperado

Una página de contacto **completa y limpia**: el visitante encuentra el dato exacto que necesita (dirección, teléfono, correo, horario) en menos de 5 segundos. El formulario es para quien prefiere escribir, no la única opción. El bloque de "Visita la cooperativa" refuerza que esto es un negocio físico real, no solo una web.

**Y el aviso legal corrige por fin el CIF, que era una deuda pendiente.**
