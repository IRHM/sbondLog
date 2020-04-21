let resultsContainer = document.getElementById("results");
let resultsAmountContainer = document.getElementById("amount");

async function getIndex() {
    // Fetch index.json file
    let response = await fetch('https://log.sbond.co/index.json', { method: "GET" });

    return await response.json();
}

async function searchFor(query) {
    let json = await getIndex();

    var results = [];

    // Get results and add to array
    for (var i = 0; i < json.length; i++) {
        if (JSON.stringify(json[i]).includes(query)) {
            results.push(json[i]);
        }
    }

    return results;
}

searchFor("ap").then(function (results) {
    for (var i = 0; i < results.length; i++) {
        let title = results[i].title;
        let date = results[i].date;
        let summary = results[i].summary;
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
                <a class="title" href="">
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
});
