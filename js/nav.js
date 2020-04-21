let search = document.getElementById("searchBtn");
let searchbar = document.getElementById("search");
let chickenburger = document.getElementById("chickenburger");
let chickenburgerMenu = document.getElementById("chickenburgerMenu");

if (search != null) {
    search.addEventListener("click", function () {
        if (searchbar.classList.contains("hidden")) {
            searchbar.classList.remove("hidden");
        }
        else {
            searchbar.classList.add("hidden");
        }

        chickenburgerMenu.classList.add('hidden');
        searchbar.focus();
    });
}

if (chickenburger != null) {
    chickenburger.addEventListener("click", function () {
        if (chickenburgerMenu.classList.contains("hidden")) {
            searchbar.classList.remove("hidden");
            chickenburgerMenu.classList.remove('hidden');
        }
        else {
            chickenburgerMenu.classList.add('hidden');
            searchbar.classList.add("hidden");
        }
    });
}
