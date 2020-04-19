async function getIndex() {
    let response = await fetch('https://log.sbond.co/index.json', { method: "GET" });

    return await response.json();
}

async function searchFor(query) {
    let json = await getIndex();

    //var results = [];results.push(json[i]);

    for (var i = 0; i < json.length; i++) {
        if (JSON.stringify(json[i]).includes(query)) {
            console.log("%c match: " + json[i]["title"], 'color: green');
            console.log(json[i]["summary"]);
        }
        else {
            console.log("%c not match: " + json[i]["title"], 'color: red');
        }
    }
}

searchFor("talk");

// Home
let portalInput = document.getElementById("portalInput");
let portalLabel = document.getElementById("portalLabel");

let githubLink = "https://github.com/sbondo1234/sbondLog";

if (portalInput != null && portalLabel != null) {
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