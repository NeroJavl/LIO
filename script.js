document.addEventListener('DOMContentLoaded', () => {
  const authForm = document.getElementById('auth_form');
  const emailField = document.getElementById('email_field');
  const passwordField = document.getElementById('password_field');
  const nameContainer = document.getElementById('name_container');
  const formTitle = document.getElementById('form_title');
  const formSubtitle = document.getElementById('form_subtitle');
  const toggleForm = document.getElementById('toggle_form');
  const toggleLink = document.getElementById('toggle_link');
  const submitBtn = document.getElementById('submit_btn');
  const loadingSpinner = document.getElementById('loading_spinner');
  const nameField = document.getElementById('name_field');

  let isLoginForm = true;

  function toggleFormMode() {
    isLoginForm = !isLoginForm;
    
    if (isLoginForm) {
      formTitle.textContent = 'Iniciar Sesión';
      formSubtitle.textContent = 'Comienza con Saturn360, crea una cuenta y disfruta la experiencia.';
      nameContainer.style.display = 'none';
      submitBtn.textContent = 'Iniciar Sesión';
      toggleLink.textContent = 'Registrarse';
    } else {
      formTitle.textContent = 'Registrarse';
      formSubtitle.textContent = 'Crea tu cuenta en Saturn360 y accede a todos los servicios.';
      nameContainer.style.display = 'flex';
      submitBtn.textContent = 'Registrarse';
      toggleLink.textContent = 'Iniciar Sesión';
    }
  }

  toggleLink.addEventListener('click', (e) => {
    e.preventDefault();
    toggleFormMode();
  });

  authForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Show loading spinner
    loadingSpinner.style.display = 'block';
    submitBtn.disabled = true;

    try {
      const email = emailField.value;
      const password = passwordField.value;
      const name = isLoginForm ? '' : nameField.value;

      // Simulated authentication logic
      // In a real-world scenario, you'd make an API call here
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Redirect to dashboard on successful login/signup
      window.location.href = 'dashboard.html';
    } catch (error) {
      console.error('Authentication error:', error);
      alert('Error en la autenticación. Por favor, intenta de nuevo.');
    } finally {
      // Hide loading spinner
      loadingSpinner.style.display = 'none';
      submitBtn.disabled = false;
    }
  });
});