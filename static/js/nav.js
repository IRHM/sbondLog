let search = document.getElementById("searchBtn");
let searchbar = document.getElementById("search");
let chickenburger = document.getElementById("chickenburger");
let chickenburgerMenu = document.getElementById("chickenburgerMenu");

search.addEventListener("click", function() {
    searchbar.classList.toggle('hidden');
    searchbar.focus();
});

chickenburger.addEventListener("click", function() {
    chickenburgerMenu.classList.toggle('hidden');
    searchbar.classList.toggle('hidden');
});
