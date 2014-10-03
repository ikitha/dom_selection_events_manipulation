var namer = document.getElementById("namer");
var charCount = document.getElementById("textbox");
var userNameLength = document.getElementById("user");

namer.addEventListener("keyup", function() {
	document.getElementById("named").innerHTML = namer.value;
});

charCount.addEventListener("keyup", function() {
	if (charCount.value.length > 140) {
		alert("Your description is too long!");
	}
});

userNameLength.addEventListener("blur", function() {
	if (userNameLength.value.length < 4) {
		alert("Your username is too short!");
	}
});
