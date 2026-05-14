/* ============================================================
   main.js — Comportamiento global del sitio
   Sin dependencias. Se carga al final del <body> con defer.
   ============================================================ */

(function () {
  'use strict';

  // -----------------------------------------------------------
  // 1. Subtítulo dinámico estacional en el hero
  //    Se calcula según el mes actual del visitante.
  // -----------------------------------------------------------
  function aplicarSubtituloEstacional() {
    const destino = document.getElementById('hero-subtitulo');
    if (!destino) return;

    const mes = new Date().getMonth(); // 0 = enero ... 11 = diciembre
    let texto;
    if (mes >= 9 || mes <= 0)        texto = 'Estamos en plena recolección';   // oct–ene
    else if (mes >= 1 && mes <= 4)   texto = 'Envasando la última cosecha';    // feb–may
    else                              texto = 'Los olivos están en flor';      // jun–sep
    destino.textContent = texto;
  }

  // -----------------------------------------------------------
  // 1b. Carga condicional del vídeo del hero.
  //     Sólo asignamos la fuente si HEAD devuelve 200, para evitar
  //     ruido en consola mientras el equipo aún no ha subido el archivo.
  // -----------------------------------------------------------
  function inicializarVideoHero() {
    const video = document.querySelector('.hero__media[data-src]');
    if (!video) return;
    const src = video.dataset.src;
    if (!src) return;

    fetch(src, { method: 'HEAD' })
      .then((r) => {
        if (!r.ok) return;
        video.src = src;
        video.load();
        const p = video.play();
        if (p && typeof p.catch === 'function') p.catch(() => { /* autoplay bloqueado: nos quedamos con el poster */ });
      })
      .catch(() => { /* sin red o sin archivo: poster como fallback */ });
  }

  // -----------------------------------------------------------
  // 2. Menú móvil (hamburguesa)
  //    Controlamos aria-expanded en el botón y aria-hidden en el panel
  //    para que el estado sea legible por lectores de pantalla.
  // -----------------------------------------------------------
  function inicializarMenuMovil() {
    const boton = document.getElementById('abrir-menu-movil');
    const panel = document.getElementById('menu-movil');
    if (!boton || !panel) return;

    const cerrar = () => {
      boton.setAttribute('aria-expanded', 'false');
      panel.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    };
    const abrir = () => {
      boton.setAttribute('aria-expanded', 'true');
      panel.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    };

    boton.addEventListener('click', () => {
      const abierto = boton.getAttribute('aria-expanded') === 'true';
      abierto ? cerrar() : abrir();
    });

    // Cerrar al pulsar un enlace del panel
    panel.querySelectorAll('a').forEach((a) => a.addEventListener('click', cerrar));

    // Cerrar con Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && boton.getAttribute('aria-expanded') === 'true') cerrar();
    });

    // Si pasamos a desktop con el menú abierto, lo cerramos
    const mqDesktop = window.matchMedia('(min-width: 1024px)');
    mqDesktop.addEventListener('change', (e) => { if (e.matches) cerrar(); });
  }

  // -----------------------------------------------------------
  // 3. Fade-in al entrar en viewport (IntersectionObserver)
  //    Cualquier elemento con la clase .al-aparecer recibe .es-visible
  //    cuando entra en el viewport. La animación visual está en CSS.
  // -----------------------------------------------------------
  function inicializarAparicionScroll() {
    const elementos = document.querySelectorAll('.al-aparecer');
    if (!elementos.length) return;

    // Fallback si el navegador no soporta IO: lo marcamos todo visible.
    if (!('IntersectionObserver' in window)) {
      elementos.forEach((el) => el.classList.add('es-visible'));
      return;
    }

    const io = new IntersectionObserver((entradas, observer) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('es-visible');
          observer.unobserve(entrada.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    });

    elementos.forEach((el) => io.observe(el));
  }

  // -----------------------------------------------------------
  // 4. Aparición secuencial de los puntos de la cronología.
  //    Cuando el bloque entra en viewport, marcamos los puntos
  //    de uno en uno con un pequeño retraso.
  // -----------------------------------------------------------
  function inicializarCronologia() {
    const bloque = document.querySelector('.cronologia');
    if (!bloque) return;
    const puntos = bloque.querySelectorAll('.cronologia__punto');
    if (!puntos.length) return;

    if (!('IntersectionObserver' in window)) {
      puntos.forEach((p) => p.classList.add('punto-visible'));
      return;
    }

    const io = new IntersectionObserver((entradas, observer) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          puntos.forEach((p, i) => {
            setTimeout(() => p.classList.add('punto-visible'), i * 140);
          });
          observer.unobserve(entrada.target);
        }
      });
    }, { threshold: 0.3 });

    io.observe(bloque);
  }

  // -----------------------------------------------------------
  // 5. Botón flotante "subir arriba"
  //    Aparece tras 400px de scroll. Click → scroll suave al inicio.
  // -----------------------------------------------------------
  function inicializarBotonArriba() {
    const boton = document.getElementById('subir-arriba');
    if (!boton) return;

    const UMBRAL = 400;
    let ticking = false;

    const actualizarVisibilidad = () => {
      const debeVerse = window.scrollY > UMBRAL;
      boton.classList.toggle('es-visible', debeVerse);
      ticking = false;
    };

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(actualizarVisibilidad);
        ticking = true;
      }
    }, { passive: true });

    boton.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    actualizarVisibilidad();
  }

  // -----------------------------------------------------------
  // 6. Contador del carrito (placeholder)
  //    Lee la cantidad de items desde localStorage y la pinta.
  //    La lógica real del carrito vive en scripts/carrito.js.
  // -----------------------------------------------------------
  function actualizarContadorCarrito() {
    const contador = document.querySelector('[data-contador-carrito]');
    if (!contador) return;
    let cantidad = 0;
    try {
      const guardado = JSON.parse(localStorage.getItem('carrito') || '[]');
      cantidad = Array.isArray(guardado)
        ? guardado.reduce((acc, item) => acc + (item.cantidad || 1), 0)
        : 0;
    } catch (_e) {
      cantidad = 0;
    }
    contador.textContent = cantidad;
    contador.setAttribute('data-cantidad', String(cantidad));
  }

  // -----------------------------------------------------------
  // Arranque
  // -----------------------------------------------------------
  document.addEventListener('DOMContentLoaded', () => {
    aplicarSubtituloEstacional();
    inicializarVideoHero();
    inicializarMenuMovil();
    inicializarAparicionScroll();
    inicializarCronologia();
    inicializarBotonArriba();
    actualizarContadorCarrito();
  });
})();
