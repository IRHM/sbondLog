/* toggling classes */
function searchToggle(e) {
  document.getElementById("searchTog").classList.toggle('hidden');
  document.getElementById('searchTog').focus();
}

function hamburgerToggle(e) {
  document.getElementById("hamburger-drop").classList.toggle('hidden');
  document.getElementById("searchTog").classList.toggle('hidden');
}

function projToggle(e) {
  document.getElementById("projTog").classList.toggle('hidden');
}
