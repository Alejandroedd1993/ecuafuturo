/* ============================================================
   NEWSLETTER.JS — Formulario de suscripción y contacto
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ============================
  // FORMULARIO DE CONTACTO
  // ============================
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async e => {
      e.preventDefault();
      clearErrors(contactForm);

      const data = new FormData(contactForm);
      const isValid = validateContactForm(data, contactForm);
      if (!isValid) return;

      const submitBtn = contactForm.querySelector('[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Enviando…';

      try {
        const res = await fetch(contactForm.action, {
          method: 'POST',
          body: data,
          headers: { 'Accept': 'application/json' },
        });

        if (res.ok) {
          showSuccess();
        } else {
          showFormError(contactForm, 'Hubo un error al enviar. Por favor, inténtalo de nuevo.');
          submitBtn.disabled = false;
          submitBtn.textContent = 'Enviar mensaje';
        }
      } catch {
        showFormError(contactForm, 'Error de conexión. Verifica tu internet e inténtalo de nuevo.');
        submitBtn.disabled = false;
        submitBtn.textContent = 'Enviar mensaje';
      }
    });
  }

  function validateContactForm(data, form) {
    let valid = true;

    const nombre = data.get('nombre') || '';
    const email = data.get('email') || '';
    const mensaje = data.get('mensaje') || '';

    if (!nombre.trim()) {
      showFieldError(form, 'nombre', 'El nombre es obligatorio.');
      valid = false;
    }

    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showFieldError(form, 'email', 'Ingresa un email válido.');
      valid = false;
    }

    if (!mensaje.trim() || mensaje.trim().length < 10) {
      showFieldError(form, 'mensaje', 'El mensaje debe tener al menos 10 caracteres.');
      valid = false;
    }

    return valid;
  }

  function showFieldError(form, fieldName, msg) {
    const field = form.querySelector(`[name="${fieldName}"]`);
    if (!field) return;
    field.classList.add('error');
    const errorEl = form.querySelector(`[data-error="${fieldName}"]`);
    if (errorEl) {
      errorEl.textContent = msg;
      errorEl.style.display = 'flex';
    }
    field.setAttribute('aria-invalid', 'true');
  }

  function clearErrors(form) {
    form.querySelectorAll('.form-input, .form-textarea, .form-select').forEach(el => {
      el.classList.remove('error');
      el.removeAttribute('aria-invalid');
    });
    form.querySelectorAll('[data-error]').forEach(el => {
      el.textContent = '';
      el.style.display = 'none';
    });
  }

  function showFormError(form, msg) {
    let errorBox = form.querySelector('.form-global-error');
    if (!errorBox) {
      errorBox = document.createElement('p');
      errorBox.className = 'form-error form-global-error';
      form.prepend(errorBox);
    }
    errorBox.textContent = msg;
    errorBox.style.display = 'flex';
  }

  function showSuccess() {
    const formCard = document.querySelector('.contacto-form-card');
    if (!formCard) return;
    const form = formCard.querySelector('form');
    const success = formCard.querySelector('.form-success');
    if (form) form.style.display = 'none';
    if (success) success.classList.add('visible');
  }

});
