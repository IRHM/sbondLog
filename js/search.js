let url = new URL(window.location.href);
let urlParams = url.searchParams;
let queryParam = urlParams.get("q");
let resultsContainer = document.getElementById("results");
let resultsAmountContainer = document.getElementById("amount");
let resultsSearchBar = document.getElementById("resultsSearchBar");

async function getIndex() {
    // Fetch index.json file
    let response = await fetch('https://log.sbond.co/index.json', { method: "GET" });

    return await response.json();
}

async function searchFor(queryParam, display) {
    let json = await getIndex();

    var results = [];

    // Get results and add to array
    for (var i = 0; i < json.length; i++) {
        if (JSON.stringify(json[i]).includes(queryParam)) {
            results.push(json[i]);
        }
    }

    if (display) {
        resultsSearchBar.style.paddingRight = "38px";
        spinner(1);

        // Reset containers html contents
        resultsAmountContainer.innerHTML = "";
        resultsContainer.innerHTML = "";

        if (results.length > 0) {
            for (var i = 0; i < results.length; i++) {
                let title = results[i].title;
                let date = results[i].date;
                let summary = results[i].summary;
                let link = results[i].link;
                let cats = "";

                // Get all categories and add them as links to cats var
                results[i].categories.forEach(function (cat) {
                    cats += `<a class='cat' href='/categories/${cat.toLowerCase().replace(/ /g, "-")}'>${cat}</a>`;
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
        else {
            resultsAmountContainer.innerHTML = `No Results Found`;
        }

        spinner(0);
        resultsSearchBar.style.paddingRight = "8px";
    }

    return results;
}

// Search for query if one is present
if (queryParam != null && resultsContainer != null && resultsAmountContainer != null) {
    resultsSearchBar.value = queryParam;

    searchFor(queryParam, true);
}

document.getElementById("resultsSearchForm").addEventListener('submit', function (e) {
    e.preventDefault();

    // Update url
    queryParam = resultsSearchBar.value;
    url.searchParams.set("q", queryParam);
    history.pushState(null, "", url);

    searchFor(resultsSearchBar.value, true);
});

function spinner(on) {
    let spinner = document.getElementById("spinner");

    if (spinner != null) {
        if (on) {
            spinner.classList.remove("hidden");
        }
        else {
            spinner.classList.add("hidden");
        }
    }
}
