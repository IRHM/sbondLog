let query = new URLSearchParams(window.location.search).get("q");
let resultsContainer = document.getElementById("results");
let resultsAmountContainer = document.getElementById("amount");
let resultsSearchBar = document.getElementById("resultsSearchBar");

async function getIndex() {
    // Fetch index.json file
    let response = await fetch('https://log.sbond.co/index.json', { method: "GET" });

    return await response.json();
}

async function searchFor(query, display) {
    let json = await getIndex();

    var results = [];

    // Get results and add to array
    for (var i = 0; i < json.length; i++) {
        if (JSON.stringify(json[i]).includes(query)) {
            results.push(json[i]);
        }
    }

    if (display = true) {
        // Reset containers html contents
        resultsAmountContainer.innerHTML = "";
        resultsContainer.innerHTML = "";

        for (var i = 0; i < results.length; i++) {
            let title = results[i].title;
            let date = results[i].date;
            let summary = results[i].summary;
            let link = results[i].link;
            let cats = "";

            // Get all categories and add them as links to cats var
            results[i].categories.forEach(function (cat) {
                cats += `<a class='cat' href=''>${cat}</a>`;
            });

            // Display amount of results found
            resultsAmountContainer.innerHTML = `${results.length} result(s) found`;

            // Display results in resultsContainer
            resultsContainer.innerHTML += `
            <li>
                <a class="title" href="${link}">
                    ${title}
                </a>

                <div class="meta">
                    <span class="date">
                        ${date}
                    </span>

                    <span class="cats">
                        ${cats}
                    </span>
                </div>

                <span class="summary">
                    ${summary}
                </span>
            </li>
        `;
        }
    }

    return results;
}

// Search for query if one is present
if (query != null && resultsContainer != null && resultsAmountContainer != null) {
    resultsSearchBar.value = query;

    searchFor(query, true);
}

document.getElementById("resultsSearchForm").addEventListener('submit', function (e) {
    e.preventDefault();

    searchFor(resultsSearchBar.value, true);
});
// Home
let portalInput = document.getElementById("portalInput");
let portalLabel = document.getElementById("portalLabel");

let githubLink = "https://github.com/sbondo1234/sbondLog";

if (portalInput != null && portalLabel != null) {
    portalInput.value = "sbondLog";
    portalLabel.innerHTML = portalInput.value;

    portalInput.addEventListener("input", function (e) {
        let val = this.value;
        portalLabel.innerHTML = val;
        val = val.toLowerCase();

        if (val == "github") {
            makeLink(githubLink);
        }
        else {
            removeLink();
        }
    });
}

function makeLink(link) {
    portalLink.href = link;
    portalLink.classList.remove("npe");
}

function removeLink() {
    portalLink.href = null;
    portalLink.classList.add("npe");
}
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