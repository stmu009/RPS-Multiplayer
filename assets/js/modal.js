$(document).ready(function () {
  updateDBValues();
  loadModal();
  var audio = new Audio('assets/audio/pokemon.mp3');
  audio.loop = true;
  audio.play();
});

function updateDBValues(params) {
  var ref = myFirebase.ref();
  ref.once('value')
  .then(function(dataSnapshot) {
    console.log('p1val:', dataSnapshot.val());
    console.log('databaseValues:', databaseValues);
    databaseValues=dataSnapshot.val();
  });
  ref.on('child_changed', function (dataSnapshot){
    // console.log('snapshot value has changed', dataSnapshot.val());
    // console.log('snapshot key has changed', dataSnapshot.key());
    // console.log('snapshot has changed', dataSnapshot);
    keyChanged=dataSnapshot.key;
    valueChanged=dataSnapshot.val();
    databaseValues[keyChanged]=valueChanged;
    // console.log('new db values', databaseValues);
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
    $(".modal-action").removeAttr("disabled");
  } else {
    $(".modal-action").attr("disabled", "disabled");
  }
});

$("#play-button").click(function (e) {
  e.preventDefault();
  username = $("#username").val();

  $("#player1-name").html(`<h4>${username}</h4>`);
  $(".player1-selection").removeAttr("disabled");
  $("#player2-name").html(`<h4>${username}</h4>`);
  //   $(".player2-selection").removeAttr("disabled");

  updatePlayerImage();
});

$("#watch-button").click(function (e) {
  username = $("#username").val();
  e.preventDefault();
});