# Mapeo de imágenes para el repositorio

Este documento explica **qué imagen de las que tenemos va dónde**. Renombrar antes de subir al repo, respetando minúsculas y guiones (sin tildes, sin eñes, sin espacios).

---

## Productos de aceite → `assets/images/products/`

| Imagen original | Nombre en el repo |
|---|---|
| `AceiteDeOlivaVirgenExtra1L.png` | `aove-coupage-1l.jpg` |
| `AceiteDeOlivaVirgenExtra5L.png` | `aove-coupage-5l.jpg` |
| `AceiteDeOlivaVirgenExtraOlixicar.png` / `AOVE_OLIXICAR_5L_CAJA.png` / `A.O.V.E. OLIXICAR (Caja 3 unidades).png` | `olixicar-5l.jpg` (elegir la más limpia) |
| `AOVE_DCOOP_ESPECIAL_COOPERATIVAS_CAJA_1L.png` | `dcoop-especial-1l.jpg` |
| `AOVE_DCOOP_ESPECIAL_COOPERATIVAS_CAJA_5L.png` | `dcoop-especial-5l.jpg` |
| `AOVE_DCOOP_LATA_3L.png` | `dcoop-especial-lata-3l.jpg` |
| `AoveDCOOP_SelectionPicual_250ml.png` | `dcoop-seleccion-picual-250ml.jpg` |
| `AoveDCOOP_SelectionHojiblanca_250ml.png` | `dcoop-seleccion-hojiblanca-250ml.jpg` |
| `AoveDCOOP_SelectionArbequina_250ml.png` | `dcoop-seleccion-arbequina-250ml.jpg` |
| `AoveUnicoFrutadoProduccionLimitada.png` | `unico-frutado.jpg` |

> Las versiones `SG_*` y otras duplicadas se pueden usar como imágenes secundarias en la galería de cada ficha (mismas rutas con sufijo `-2`, `-3`).

---

## Premium edition → `assets/images/premium-edition/`

Para el bloque destacado del Único Frutado en home y en banda de tienda:

| Necesario | Origen sugerido |
|---|---|
| `unico-frutado-hero.jpg` | `AOVE_DCOOP_UNICO_COUPAGE_FRUTADO_CAJA.png` o `AoveUnicoFrutadoProduccionLimitada.png` con buen fondo |
| `unico-frutado-detalle.jpg` | `AOVE_DCOOP_UNICO_COUPAGE_FRUTADO_ESTUCHE.png` |

---

## Productos agrícolas → `assets/images/agricolas/`

| Imagen original | Nombre en el repo |
|---|---|
| `Ctg_Vareo_Pdct_Manta_Vareo.png` | `vareo-manta.jpg` |
| `Ctg_Vareo_Pdct_Rastrillo_Vareo.png` | `vareo-rastrillo.jpg` |
| `Ctg_Vareo_Pdct_Vara.png` | `vareo-vara.jpg` |
| `Ctg_Vareo.png` | `vareo-cat.jpg` |
| `Ctg_Productos_Fitosanitarios_Pdct_Fungicida.png` | `fitosanitarios-fungicida.jpg` |
| `Ctg_Productos_Fitosanitarios_Pdct_Herbicida.png` | `fitosanitarios-herbicida.jpg` |
| `Ctg_Productos_Fitosanitarios_Pdct_Insecticida.png` | `fitosanitarios-insecticida.jpg` |
| `Ctg_Productos_Fitosanitarios.png` | `fitosanitarios-cat.jpg` |
| `Ctg_Nutricion_Agricola_Pdct_Abono.png` | `nutricion-abono.jpg` |
| `Ctg_Nutricion_Agricola_Pdct_Fertilizante.png` | `nutricion-fertilizante.jpg` |
| `Ctg_Nutricion_Agricola.png` | `nutricion-cat.jpg` |
| `Ctg_Accesorios_Agricolas_Pdct_Capazo.png` | `accesorios-capazo.jpg` |
| `Ctg_Accesorios_Agricolas_Pdct_Guantes.png` | `accesorios-guantes.jpg` |
| `Ctg_Accesorios_Agricolas.png` | `accesorios-cat.jpg` |
| `Ctg_Repuestos_Maquinaria_Pdct_Repuestos_Maquinaria.png` | `repuestos.jpg` |
| `Ctg_Repuestos_Maquinaria.png` | `repuestos-cat.jpg` |

---

## Hero, about, location → varias carpetas

Estas imágenes hay que conseguirlas o decidir qué usar de las antiguas (`olivosCampo.jpg`, `aceiteTanque*.jpg`, `Aceitunas*.jpg`, `fotoDeLugar.jpg`).

### `assets/images/hero/`
- `hero-fallback.jpg` → imagen estática mientras carga el vídeo del hero (puede ser `olivosCampo.jpg` o una nueva del olivar al amanecer)

### `assets/videos/`
- `hero-referencia.mp4` → vídeo de stock o referencia (cualquier `.mp4` de 10-30 segundos con escena de aceite, olivar o naturaleza)

### `assets/images/about/`
- `cooperativa-exterior.jpg` → para el bloque "quiénes somos breve" en home (puede ser `fotoDeLugar.jpg`)
- `cooperativa-hero.jpg` → para el hero de la página La cooperativa
- `olivar-montana.jpg` → para el bloque "El olivar de montaña" (puede ser `olivosCampo.jpg`)
- `placas-solares.jpg` → para el bloque "Modernización" (necesitamos foto real)

### `assets/images/history-timeline/`
Una imagen por hito histórico:
- `1963-origen.jpg` — foto histórica o foto evocadora de olivar antiguo
- `2013-dcoop.jpg` — foto sede DCOOP o tanques (puede ser `aceiteTanque.jpg`)
- `2016-traslado.jpg` — foto de la almazara actual
- `2024-fotovoltaica.jpg` — foto de las placas (puede coincidir con `placas-solares.jpg`)

### `assets/images/location/`
- `visita-cooperativa.jpg` — foto de la entrada o instalaciones de la almazara (para el bloque "Visita" de contacto)

### `assets/images/certifications/`
- `dop-montes-granada.svg` → logo oficial de la DOP
- `dcoop.svg` → logo oficial de DCOOP
- `dop-contraetiqueta.jpg` → foto de una contraetiqueta numerada (detalle)

---

## Iconos SVG → `assets/images/icons/`

Hace falta colección de iconos monocromos en SVG. Si no los tenemos, descargar de **Lucide Icons** (https://lucide.dev) o **Heroicons** (https://heroicons.com), que son libres y limpios.

Listado completo necesario:

**Selector de uso (home):**
- `cocinar.svg` — icono de cazuela u olla
- `crudo.svg` — gota de aceite u hoja de olivo
- `regalo.svg` — lazo o caja de regalo

**Tres virtudes (home):**
- `montana.svg` — montaña
- `cooperativa.svg` — personas o manos unidas
- `medioambiente.svg` — hoja con sol o panel solar

**Trazabilidad (cooperativa):**
- `parcela.svg` — árbol o campo
- `almazara.svg` — fábrica o edificio
- `envasado.svg` — botella o caja
- `mesa.svg` — plato o copa

**Contacto:**
- `pin.svg` — marcador de ubicación
- `phone.svg` — teléfono
- `mail.svg` — sobre
- `clock.svg` — reloj

**Carrito:**
- `carrito-vacio.svg` — carrito grande para vista vacía
- `check.svg` — tick para confirmación de pedido

---

## Reglas generales

- **Antes de subir, renombrar** según las tablas anteriores.
- **Comprimir a JPG si se pueden** (más ligero que PNG). PNG solo si tienen transparencia.
- **Peso máximo 300 KB por imagen.** Comprimir con TinyPNG (https://tinypng.com) o similar antes de subir.
- **Mínimo 1200px de ancho** para imágenes hero/banner. 600-800px para tarjetas de producto.
- **Si una imagen no la tenemos todavía**, crear un PNG cualquiera con el nombre exacto. Design lo necesita para que el código funcione. La imagen real se sustituye después.

---

## Checklist de subida

Antes de pedir a Design que genere una página, comprobar que todas las imágenes que el brief de esa página menciona están en sus carpetas:

- [ ] Home: hero, about, premium-edition, products (las 3 destacadas), certifications, icons
- [ ] La cooperativa: about, history-timeline, certifications, icons
- [ ] Tienda: products (las 10 referencias), premium-edition
- [ ] Productos agrícolas: agricolas (todas las categorías + productos)
- [ ] Producto: products (mismas que tienda)
- [ ] Carrito: icons (carrito-vacio, check)
- [ ] Contacto: location, icons
