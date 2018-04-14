$(document).ready(function () {
  updateDBValues();
  loadModal();
  var audio = new Audio('assets/audio/pokemon.mp3');
  audio.loop = true;
  audio.play();
});
var role = "watcher";

function updateDBValues(params) {
  var ref = myFirebase.ref();
  ref.once('value')
    .then(function (dataSnapshot) {
      console.log('dataSnapshot:', dataSnapshot.val());
      console.log('databaseValues:', databaseValues);
      databaseValues = dataSnapshot.val();
      console.log('databaseValues set to dbSnap:', databaseValues);
      if (databaseValues.player1 === "" || databaseValues.player2 === "") {
        $("#username").keyup(function (e) {
          e.preventDefault();
          if ($("#username").val().length > 0) {
            $("#play-button").removeAttr("disabled");
          } else {
            $(".modal-action").attr("disabled", "disabled");
          }
        });
      }
    });

  ref.on('child_changed', function (dataSnapshot) {
    // console.log('snapshot value has changed', dataSnapshot.val());
    // console.log('snapshot key has changed', dataSnapshot.key());
    // console.log('snapshot has changed', dataSnapshot);
    keyChanged = dataSnapshot.key;
    newValue = dataSnapshot.val();
    if (keyChanged === "player1") {
      if (newValue === "") {
        $("#username").keyup(function (e) {
          e.preventDefault();
          if ($("#username").val().length > 0) {
            $("#play-button").removeAttr("disabled");
          } else {
            $(".modal-action").attr("disabled", "disabled");
          }
        });
        //hideStuff/reset, clear scores player left, open spot
      } else {
        //new player1 update names and sprites
      }
    }

    if (keyChanged === "player2") {
      if (newValue === "") {
        $("#username").keyup(function (e) {
          e.preventDefault();
          if ($("#username").val().length > 0) {
            $("#play-button").removeAttr("disabled");
          } else {
            $(".modal-action").attr("disabled", "disabled");
          }
        });
        //hideStuff/reset, player left, open spot
      } else {
        //new player2 update names and sprites
      }
    }

    if (keyChanged === "player1-losses") {
      //update id
    }
    if (keyChanged === "player1-ties") {
      //update id
    }
    if (keyChanged === "player1-wins") {
      //update id
    }
    if (keyChanged === "player2-losses") {
      //update id
    }
    if (keyChanged === "player2-ties") {
      //update id
    }
    if (keyChanged === "player2-wins") {
      //update id
    }
  })

  

  
}


function loadModal() {
  $(".modal").modal();
  $("#modal1").modal({
    dismissible: false
  });
  $("#modal1").modal("open");
  $("#play-button").attr("disabled", "disabled");
  $("#watch-button").attr("disabled", "disabled");

}


$("#username").keyup(function (e) {
  e.preventDefault();
  if ($("#username").val().length > 0) {
    $("#watch-button").removeAttr("disabled");
  } else {
    $(".modal-action").attr("disabled", "disabled");
  }
});

$("#play-button").click(function (e) {
  e.preventDefault();
  username = $("#username").val();

  if (databaseValues.player1 === "") {
    role = "player1";
    var disconnectRef = myFirebase.ref();
    disconnectRef.onDisconnect().update({
      "player1": "",
      "player1-sprite-url": "",
      "player1-sprite-name": "",
      "player1-losses": 0,
      "player1-ties": 0,
      "player1-wins": 0,
    });
    var playerRef = myFirebase.ref();
    playerRef.update({
      player1: username
    });
    $("#player1-name").html(`<h4>${username}</h4>`);
    $(".player1-selection").removeAttr("disabled");
  } else if (databaseValues.player2 === "") {
    role = "player2";
    var disconnectRef = myFirebase.ref();
    disconnectRef.onDisconnect().update({
      "player2": "",
      "player2-sprite-url": "",
      "player2-sprite-name": "",
      "player2-losses": 0,
      "player2-ties": 0,
      "player2-wins": 0,
    });
    var playerRef = myFirebase.ref();
    playerRef.update({
      player2: username
    });
    $("#player2-name").html(`<h4>${username}</h4>`);
    $(".player2-selection").removeAttr("disabled");
  }
});

$("#watch-button").click(function (e) {
  username = $("#username").val();
  e.preventDefault();
});