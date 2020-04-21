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