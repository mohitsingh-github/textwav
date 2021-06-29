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
