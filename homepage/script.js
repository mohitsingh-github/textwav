

 function login() {
    var usernamelogin = document.getElementById("usernamelogin").value;
    var passwordlogin = document.getElementById("passwordlogin").value;

if(usernamelogin && passwordlogin){
        for(let i = 0; i < localStorage.length; i++){
            if(usernamelogin == localStorage.username && passwordlogin == localStorage.password){
                   alert(localStorage.name+" you are successfully logged in");
                   window.location.replace("https://mohitsingh-github.github.io/textwav/homepage/");
                   return;
            }
        }
    }

}



 function register() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var cpassword = document.getElementById("cpassword").value;
    var name = document.getElementById("name").value;
if(username && password && name){
if(password==cpassword){ 
  localStorage.setItem("username", username);
        localStorage.setItem("password", password);
                localStorage.setItem("name", name);
                alert(localStorage.name+" you are successfully registered");
                window.location.replace("https://mohitsingh-github.github.io/textwav/homepage/");
}
}
}
