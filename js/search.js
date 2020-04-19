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
