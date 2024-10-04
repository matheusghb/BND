const darkModeToggle = document.getElementById('input-dark-mode');
const bodyElement = document.body;

// Check if dark mode is already enabled
if (localStorage.getItem('darkMode') === 'true') {
  bodyElement.classList.add('dark-mode');
  darkModeToggle.checked = true;
}

darkModeToggle.addEventListener('change', () => {
  if (darkModeToggle.checked) {
    bodyElement.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'true');
  } else {
    bodyElement.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'false');
  }
});
