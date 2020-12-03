var a=0;
var b=0;

function submit(event) {
	var a = document.getElementById("un").value;
	var b = document.getElementById("pw").value;
	if(b=="Mohit"){
console.log("redirecting to profile")
}
else{
	document.getElementById("loginmsg") .textContent = "wrong password";

}

}
