// generate random pokemon and set image
var contentsJSON = {}

function updatePlayerImage(player) {
    var randomPokemon = Math.floor(Math.random() * 802)

    // console.log(`set random pokemon id ${randomPokemon}`);
    url = `http://pokeapi.co/api/v2/pokemon/${randomPokemon}/`

    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
        .then(response => response.text())
        .then(contents => {
            contentsJSON = $.parseJSON(contents);
            // console.log('set image url src:', contentsJSON.sprites.front_shiny);
            $('#'+player+'-image').attr('src', contentsJSON.sprites.front_shiny);
            $('#'+player+'-image-name').text(contentsJSON.name);
        })
        .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
}

