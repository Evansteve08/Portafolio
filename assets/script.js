// ==========================================================================
// PORTAFOLIO INTERACTIVO - CÓDIGO LIMPIO Y FUNCIONAL
// ==========================================================================

// 1. Menú Hamburguesa para Móvil
const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav-menu');

menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Cerrar menú responsive al hacer clic en una opción
document.querySelectorAll('#nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show');
  });
});

// 2. Cambio de Tema (Claro / Oscuro)
const themeBtn = document.getElementById('theme-btn');

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  
  if (document.body.classList.contains('light-mode')) {
    themeBtn.textContent = '☀️';
  } else {
    themeBtn.textContent = '🌙';
  }
});

// 3. Filtrado de Proyectos por Categoría
function filtrarProyectos(categoria) {
  const tarjetas = document.querySelectorAll('.project-card');
  const botones = document.querySelectorAll('.filter-btn');

  // Actualizar estilo del botón activo
  botones.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  // Mostrar / ocultar tarjetas con transición sencilla
  tarjetas.forEach(tarjeta => {
    if (categoria === 'todos' || tarjeta.dataset.category === categoria) {
      tarjeta.classList.remove('hide');
    } else {
      tarjeta.classList.add('hide');
    }
  });
}

// 4. Validación del Formulario de Contacto en Tiempo Real
// ==========================================================================
// VALIDACIÓN Y ENVÍO DEL FORMULARIO DE CONTACTO
// ==========================================================================

// 1. Obtención de elementos del HTML
const form = document.getElementById('contact-form');
const nombre = document.getElementById('nombre');
const correo = document.getElementById('correo');
const mensaje = document.getElementById('mensaje');
const formMsg = document.getElementById('form-msg');

// 2. Funciones de validación
function validarNombre() {
  const err = document.getElementById('err-nombre');
  if (nombre.value.trim().length < 3) {
    err.textContent = 'El nombre debe tener al menos 3 caracteres.';
    nombre.classList.add('invalid');
    return false;
  }
  err.textContent = '';
  nombre.classList.remove('invalid');
  return true;
}

function validarCorreo() {
  const err = document.getElementById('err-correo');
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexEmail.test(correo.value.trim())) {
    err.textContent = 'Ingresa un correo electrónico válido.';
    correo.classList.add('invalid');
    return false;
  }
  err.textContent = '';
  correo.classList.remove('invalid');
  return true;
}

function validarMensaje() {
  const err = document.getElementById('err-mensaje');
  if (mensaje.value.trim().length < 10) {
    err.textContent = 'El mensaje debe contener al menos 10 caracteres.';
    mensaje.classList.add('invalid');
    return false;
  }
  err.textContent = '';
  mensaje.classList.remove('invalid');
  return true;
}

// 3. Eventos en tiempo real y envío del formulario
nombre.addEventListener('input', validarNombre);
correo.addEventListener('input', validarCorreo);
mensaje.addEventListener('input', validarMensaje);

form.addEventListener('submit', (e) => {
  const esNombreValido = validarNombre();
  const esCorreoValido = validarCorreo();
  const esMensajeValido = validarMensaje();

  // Si algún campo no es válido, cancelamos el envío
  if (!esNombreValido || !esCorreoValido || !esMensajeValido) {
    e.preventDefault();
    formMsg.className = 'form-feedback error';
    formMsg.textContent = 'Por favor, completa correctamente los campos.';
  }
  // Si todo es válido, Formspree procesará el envío al correo
});

// Evento de Envío del Formulario
form.addEventListener('submit', (e) => {
  const esNombreValido = validarNombre();
  const esCorreoValido = validarCorreo();
  const esMensajeValido = validarMensaje();

  // Si algún campo no es válido, cancelamos el envío
  if (!esNombreValido || !esCorreoValido || !esMensajeValido) {
    e.preventDefault();
    formMsg.className = 'form-feedback error';
    formMsg.textContent = 'Por favor, completa correctamente los campos.';
  }
  // Si todo es válido, NO ejecutamos e.preventDefault(), permitiendo que los datos se envíen a Formspree
});