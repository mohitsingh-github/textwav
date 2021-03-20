window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});

function showr(){
	document.getElementById("login-form").style.display="none";
		document.getElementById("register-form").style.display="block";
}
function showl(){
	document.getElementById("register-form").style.display="none";
		document.getElementById("login-form").style.display="block";
}

//registration
document.getElementById("registerbtn").addEventListener("click", function() {
  document.getElementById("registermsg").innerHTML = "Registration Attempted";
});

//login
document.getElementById("loginbtn").addEventListener("click", function() {
  document.getElementById("loginmsg").innerHTML = "Login Attempted";
});