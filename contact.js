// ============================================
// FEATURE 1: RESPONSIVE HAMBURGER MENU
// ============================================

function initHamburgerMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      hamburger.classList.toggle('active');
    });
    
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
      });
    });
  }
}

// ============================================
// FEATURE 3: BACK TO TOP BUTTON
// ============================================

function initBackToTop() {
  const backToTopBtn = document.querySelector('.back-to-top');
  
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    });
    
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

// ============================================
// FEATURE 2: FORM VALIDATION WITH ERROR MESSAGES
// ============================================

function initFormValidation() {
  const form = document.querySelector('.contact-form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  
  if (!form) return;
  
  // Validate name field
  function validateName() {
    const nameError = document.getElementById('name-error');
    const name = nameInput.value.trim();
    
    if (name.length === 0) {
      showError(nameError, 'Name is required');
      return false;
    } else if (name.length < 2) {
      showError(nameError, 'Name must be at least 2 characters');
      return false;
    } else {
      hideError(nameError);
      return true;
    }
  }
  
  // Validate email field
  function validateEmail() {
    const emailError = document.getElementById('email-error');
    const email = emailInput.value.trim();
    
    // Basic email regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (email.length === 0) {
      showError(emailError, 'Email is required');
      return false;
    } else if (!emailPattern.test(email)) {
      showError(emailError, 'Please enter a valid email address');
      return false;
    } else {
      hideError(emailError);
      return true;
    }
  }
  
  // Validate message field
  function validateMessage() {
    const messageError = document.getElementById('message-error');
    const message = messageInput.value.trim();
    
    if (message.length === 0) {
      showError(messageError, 'Message is required');
      return false;
    } else if (message.length < 10) {
      showError(messageError, 'Message must be at least 10 characters');
      return false;
    } else {
      hideError(messageError);
      return true;
    }
  }
  
  // Helper function to show error
  function showError(errorElement, message) {
    errorElement.textContent = message;
    errorElement.style.display = 'block';
  }
  
  // Helper function to hide error
  function hideError(errorElement) {
    errorElement.textContent = '';
    errorElement.style.display = 'none';
  }
  
  // Real-time validation as user types
  nameInput.addEventListener('input', validateName);
  emailInput.addEventListener('input', validateEmail);
  messageInput.addEventListener('input', validateMessage);
  
  // Form submission
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission
    
    // Validate all fields
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isMessageValid = validateMessage();
    
    // If all fields are valid, show success message
    if (isNameValid && isEmailValid && isMessageValid) {
      showSuccessMessage();
      form.reset(); // Clear the form
    }
  });
}

// Show success message after form submission
function showSuccessMessage() {
  const successMessage = document.querySelector('.success-message');
  
  if (successMessage) {
    successMessage.style.display = 'block';
    successMessage.textContent = '✓ Thanks! We\'ll get back to you soon.';
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      successMessage.style.display = 'none';
    }, 5000);
  }
}

// ============================================
// INITIALIZE ALL FEATURES ON PAGE LOAD
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  initHamburgerMenu();
  initBackToTop();
  initFormValidation();
});
