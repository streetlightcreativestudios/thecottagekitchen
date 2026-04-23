// Switch menu tabs
function switchTab(btn, id) {
  document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.menu-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('panel-' + id).classList.add('active');
}

// Submit reservation form
function submitForm() {
  const inputs = document.querySelectorAll(
    '#reservation-form input[type="text"], #reservation-form input[type="email"], #reservation-form input[type="tel"]'
  );
  let valid = true;
  inputs.forEach(i => {
    if (!i.value.trim()) {
      i.style.borderColor = '#c0432e';
      valid = false;
    } else {
      i.style.borderColor = '';
    }
  });
  if (!valid) return;
  document.getElementById('reservation-form').style.display = 'none';
  document.getElementById('form-success').classList.add('show');
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