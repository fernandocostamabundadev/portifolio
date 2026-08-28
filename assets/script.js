// ========================================
// MENU MOBILE 
// ========================================

document.addEventListener('DOMContentLoaded', function() {
  console.log('🚀 Iniciando...');

  var menu = document.getElementById('nav-menu');
  var toggle = document.getElementById('nav-toggle');
  var close = document.getElementById('nav-close');
  var links = document.querySelectorAll('.nav__link');
  var header = document.getElementById('header');

  if (!menu || !toggle) {
    console.error('❌ Elementos não encontrados!');
    return;
  }

  function abrir() {
    menu.classList.add('show-menu');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    document.body.classList.add('menu-open');
  }

  function fechar() {
    menu.classList.remove('show-menu');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    document.body.classList.remove('menu-open');
  }

  toggle.addEventListener('click', function(e) {
    e.stopPropagation();
    if (menu.classList.contains('show-menu')) {
      fechar();
    } else {
      abrir();
    }
  });

  if (close) {
    close.addEventListener('click', function(e) {
      e.stopPropagation();
      fechar();
    });
  }

  links.forEach(function(link) {
    link.addEventListener('click', function() {
      fechar();
    });
  });

  document.addEventListener('click', function(e) {
    if (!menu.classList.contains('show-menu')) return;

    var dentro = menu.contains(e.target);
    var noToggle = toggle.contains(e.target);
    var noClose = close ? close.contains(e.target) : false;

    if (!dentro && !noToggle && !noClose) {
      fechar();
    }
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && menu.classList.contains('show-menu')) {
      fechar();
    }
  });

  function updateHeaderState() {
    if (!header) return;
    if (window.scrollY > 30) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }

  function updateActiveNavLink() {
    var scrollPosition = window.scrollY + 140;
    var currentId = 'hero';

    document.querySelectorAll('main section[id], footer[id]').forEach(function(section) {
      if (section.offsetTop <= scrollPosition) {
        currentId = section.getAttribute('id');
      }
    });

    links.forEach(function(link) {
      var isActive = link.getAttribute('href') === '#' + currentId;
      link.classList.toggle('active', isActive);
    });
  }

  updateHeaderState();
  updateActiveNavLink();
  window.addEventListener('scroll', function() {
    updateHeaderState();
    updateActiveNavLink();
  });

  console.log('✅ Menu pronto! 🚀');
});



// ========================================
// FORMULÁRIO DE CONTATO 
// ========================================

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.contact__form');
  if (!form) return;

  const FORMSPREE_URL = 'https://formspree.io/f/mbdeednl';

  // Feedback visual
  const createFeedback = function(message, type) {
    const oldFeedback = form.querySelector('.form-feedback');
    if (oldFeedback) oldFeedback.remove();

    const feedback = document.createElement('div');
    feedback.className = 'form-feedback form-feedback--' + type;
    feedback.textContent = message;
    
    if (type === 'success') {
      feedback.style.cssText = 'padding: 0.75rem 1rem; border-radius: 8px; margin-bottom: 1rem; font-weight: 500; background: #d4edda; color: #155724; border: 1px solid #c3e6cb;';
    } else {
      feedback.style.cssText = 'padding: 0.75rem 1rem; border-radius: 8px; margin-bottom: 1rem; font-weight: 500; background: #f8d7da; color: #721c24; border: 1px solid #f5c6cb;';
    }
    
    form.prepend(feedback);
    
    setTimeout(function() {
      if (feedback.parentNode) {
        feedback.style.opacity = '0';
        feedback.style.transition = 'opacity 0.5s ease';
        setTimeout(function() { feedback.remove(); }, 500);
      }
    }, 5000);
  };

  // Validação de campo
  const validateField = function(input) {
    const errorElement = input.parentElement.querySelector('.field-error');
    
    if (input.id === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(input.value)) {
        input.style.borderColor = '#dc3545';
        if (errorElement) {
          errorElement.textContent = 'Por favor, insira um email válido.';
          errorElement.style.display = 'block';
        }
        return false;
      }
    }
    
    if (input.hasAttribute('required') && !input.value.trim()) {
      input.style.borderColor = '#dc3545';
      if (errorElement) {
        errorElement.textContent = 'Este campo é obrigatório.';
        errorElement.style.display = 'block';
      }
      return false;
    }
    
    input.style.borderColor = '#28a745';
    if (errorElement) {
      errorElement.style.display = 'none';
    }
    return true;
  };

  // Adiciona elementos de erro
  form.querySelectorAll('.contact__input, .contact__textarea').forEach(function(input) {
    const errorElement = document.createElement('span');
    errorElement.className = 'field-error';
    errorElement.style.cssText = 'display: none; color: #dc3545; font-size: 0.8rem; margin-top: 0.25rem;';
    input.parentElement.appendChild(errorElement);
    
    input.addEventListener('blur', function() { validateField(input); });
    input.addEventListener('input', function() {
      if (input.style.borderColor === '#dc3545') {
        validateField(input);
      }
    });
  });

  // Envio do formulário
  form.addEventListener('submit', async function(event) {
    event.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    let hasError = false;
    form.querySelectorAll('[required]').forEach(function(input) {
      if (!validateField(input)) hasError = true;
    });

    if (data.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        hasError = true;
        const emailInput = form.querySelector('#email');
        if (emailInput) {
          emailInput.style.borderColor = '#dc3545';
          const errorElement = emailInput.parentElement.querySelector('.field-error');
          if (errorElement) {
            errorElement.textContent = 'Por favor, insira um email válido.';
            errorElement.style.display = 'block';
          }
        }
      }
    }

    if (hasError) {
      createFeedback('⚠️ Por favor, corrija os campos destacados.', 'error');
      return;
    }

    const formBody = new URLSearchParams(data).toString();
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn ? submitBtn.textContent : 'Enviar...';

    try {
      if (submitBtn) {
        submitBtn.textContent = '⏳ Enviando...';
        submitBtn.disabled = true;
      }

      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formBody,
      });

      if (submitBtn) {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }

      if (response.ok) {
        createFeedback('✅ Mensagem enviada com sucesso! Entrarei em contato em breve.', 'success');
        form.reset();
        form.querySelectorAll('.contact__input, .contact__textarea').forEach(function(input) {
          input.style.borderColor = '';
        });
      } else {
        createFeedback('❌ Ocorreu um erro ao enviar sua mensagem. Tente novamente.', 'error');
      }
    } catch (error) {
      createFeedback('❌ Erro de conexão. Verifique sua internet e tente novamente.', 'error');
      if (submitBtn) {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }
    }
  });

  console.log('✅ Formulário inicializado com sucesso!');
});