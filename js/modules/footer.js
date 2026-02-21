const updateCopyrightYear = () => {
  const yearElement = document.querySelector('#year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
};

document.addEventListener('DOMContentLoaded', () => {
  updateCopyrightYear();
});