const darkModeToggle = document.getElementById('input-dark-mode');
const bodyElement = document.body;

darkModeToggle.addEventListener('change', () => {
  if (darkModeToggle.checked) {
    bodyElement.classList.add('dark-mode');
  } else {
    bodyElement.classList.remove('dark-mode');
  }
});
