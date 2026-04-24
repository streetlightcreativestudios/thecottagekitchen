// Switch menu tabs
function switchTab(btn, id) {
  document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.menu-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('panel-' + id).classList.add('active');
}

function submitForm() {
  let valid = true;

  // Text, email, tel fields
  ['first-name', 'last-name', 'email', 'phone'].forEach(id => {
    const input = document.getElementById(id);
    if (!input.value.trim()) {
      input.style.borderColor = '#c0432e';
      valid = false;
    } else {
      input.style.borderColor = '';
    }
  });

  // Date field
  const date = document.getElementById('date');
  if (!date.value) {
    date.style.borderColor = '#c0432e';
    valid = false;
  } else {
    date.style.borderColor = '';
  }

  // Time select
  const time = document.getElementById('time');
  if (!time.value) {
    time.style.borderColor = '#c0432e';
    valid = false;
  } else {
    time.style.borderColor = '';
  }

  if (!valid) return;

  document.getElementById('reservation-form').style.display = 'none';
  document.getElementById('form-success').classList.add('show');
}

function resetForm() {
  document.getElementById('reservation-form').reset();
  document.getElementById('reservation-form').style.display = 'block';
  document.getElementById('form-success').classList.remove('show');
}

// Reset form
function resetForm() {
  document.getElementById('reservation-form').style.display = 'block';
  document.getElementById('form-success').classList.remove('show');
}

// Sticky navbar
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }
});

// Hamburger menu toggle ← FIXED
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  const hamburger = document.getElementById('hamburger');
  if (!navLinks) return; // safety check
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('active'); // enables the X animation
}

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.remove('open');
    document.getElementById('hamburger').classList.remove('active'); // ← also reset the X
  });
});