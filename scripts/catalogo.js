/* ============================================================
   catalogo.js — Filtros de catálogo (tienda y productos agrícolas)
   Activa los chips de filtrado y oculta/muestra secciones por categoría.
   Funciona sobre cualquier contenedor con data-filtrable.
   ============================================================ */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-filtros]').forEach(inicializarFiltro);
  });

  /**
   * Inicializa un grupo de filtros.
   * Espera dos atributos en el contenedor:
   *  - data-filtros           — marca el contenedor de chips
   *  - data-filtros-objetivo  — selector CSS de los elementos filtrables
   * Cada elemento filtrable debe tener data-categoria con el id de la categoría.
   * Cada chip debe tener data-filtro="<categoria | 'todas'>".
   */
  function inicializarFiltro(contenedor) {
    const selectorObjetivo = contenedor.getAttribute('data-filtros-objetivo');
    if (!selectorObjetivo) return;
    const elementos = document.querySelectorAll(selectorObjetivo);
    const chips = contenedor.querySelectorAll('[data-filtro]');

    chips.forEach((chip) => {
      chip.addEventListener('click', () => {
        const filtro = chip.dataset.filtro;
        // Marcar chip activo
        chips.forEach((c) => {
          const activo = c === chip;
          c.classList.toggle('chip-formato--activo', activo);
          c.setAttribute('aria-pressed', activo ? 'true' : 'false');
        });
        // Aplicar filtro: 'todas' muestra todo
        elementos.forEach((el) => {
          const categoria = el.dataset.categoria;
          const visible = filtro === 'todas' || categoria === filtro;
          el.classList.toggle('esta-oculto', !visible);
        });
      });
    });
  }
})();
