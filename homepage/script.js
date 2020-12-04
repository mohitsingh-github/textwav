

 function login() {
    var usernamelogin = document.getElementById("usernamelogin").value;
    var passwordlogin = document.getElementById("passwordlogin").value;

if(usernamelogin && passwordlogin){
        for(let i = 0; i < localStorage.length; i++){
            if(usernamelogin == localStorage.username && passwordlogin == localStorage.password){
                   location.reload();
                   alert(localStorage.name+" you are successfully logged in");
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
                location.reload();
                alert(localStorage.name+" you are successfully registered");
}
}
}
