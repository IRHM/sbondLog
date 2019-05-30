/* toggling classes */
function searchToggle(e) {
  document.getElementById("searchTog").classList.toggle('hidden');
  document.getElementById('searchTog').focus();
}

function hamburgerToggle(e) {
  document.getElementById("hamburger-drop").classList.toggle('hidden');
  document.getElementById("searchTog").classList.toggle('hidden');
}

function statsToggle(e) {
  document.getElementById("stat").classList.toggle('hidden');
}
