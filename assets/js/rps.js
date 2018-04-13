
// get name value

// must have name value to enable buttons in modal

$('.player1-selection').click(function (e) { 
    e.preventDefault();
    console.log('update db with rps click', $(this).text());
});

$('.player2-selection').click(function (e) { 
    e.preventDefault();
    console.log('update db with rps click', $(this).text());
});


function updateRole (arguments) {
    console.log('check available roles');
    console.log('update database with user role - player1, player2, watcher')
}

function updatePlayerChoice (arguments) {
    console.log(`update the database with the player's selection`)
}

function determineWinner (arguments) {
    console.log('compare values from database and determind and show winner');
}

function updatePlayerScore (arguments) {
    console.log(`update the database with players' score`);
}

function disableRPSButtons (arguments) {
    console.log('disable the rps buttons');
}

// handle when player leaves

//update results section as things happen
// 0. waiting on both players to choose
// 1. player 1 has chosen waiting on player 2
// 2. player 2 has chosen waiting on player 1
// 3. both players have chosen waiting on result
// 4. show results
// 5. load next round
// x. player has left

// 5 second fade into start of next round 
// show status
// enable rps buttons

//background song
