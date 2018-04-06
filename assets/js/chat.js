
var usernameInput = document.querySelector("#username");
var textInput = document.querySelector("#text");
var postButton = document.querySelector("#post");

postButton.addEventListener("click", function() {
  var msgUser = usernameInput.value;
  var msgText = textInput.value;
  myFirebase.push({ username: msgUser, text: msgText });
  textInput.value = "";
});

/** Function to add a data listener **/
var startListening = function() {
  myFirebase.on("child_added", function(snapshot) {
    var msg = snapshot.val();

    var msgUsernameElement = document.createElement("b");
    msgUsernameElement.textContent = msg.username;

    var msgTextElement = document.createElement("p");
    msgTextElement.textContent = msg.text;

    var msgElement = document.createElement("div");
    msgElement.appendChild(msgUsernameElement);
    msgElement.appendChild(msgTextElement);

    document.getElementById("results").appendChild(msgElement);

    msgElement.className = "msg";
    document.getElementById("results").appendChild(msgElement);
  });
};

// Begin listening for data
startListening();
