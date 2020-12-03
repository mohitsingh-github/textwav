 /*let users = [];
        const adduser = (ev)=>{
            ev.preventDefault();  //to stop the form submitting
            let user = {
                id: Date.now(),
                name: document.getElementById('name').value,
                username: document.getElementById('username').value,
                password: document.getElementById('password').value
            }
            users.push(user);
            document.forms[0].reset(); // to clear the form for the next entries
            //document.querySelector('form').reset();

            //for display purposes only
            console.warn('added' , {users} );
            let pre = document.querySelector('#msg pre');
            pre.textContent = '\n' + JSON.stringify(users, '\t', 2);

            //saving to localStorage
            localStorage.setItem('userslist', JSON.stringify(users) );
        }
        document.addEventListener('DOMContentLoaded', ()=>{
            document.getElementById('registerbtn').addEventListener('click', adduser);
        });
        */
  
// Create a registration system
var users = [
    {
        username: 'Mohit',
        password: 'abcdefgh',
        name: 'Mohit'
    },
    {
        username: 'Lalit',
        password: '12345678',
               name: 'Lalit'
    },
    {
        username: 'Meenakshi',
        password: 'airindia',
               name: 'Meenakshi'
    }
]


function login() {
    // retreive data from username and store in username variable
    var username = document.getElementById('usernamelogin').value
    // retreive data from password and store in password variable
    var password = document.getElementById('passwordlogin').value

    // loop through all the user pbjects and confrim if the username and password are correct
    for(var i = 0; i < users.length; i++) {
        // check to 
        if(username == users[i].username && password == users[i].password) {
            console.log(username + ' is logged in!!!')
            // stop the statement if result is found true - this was a return in the video, break is best practice here
            break
        } else {
            // error if username and password don't match
            console.log('incorrect username or password')
        }
    }
}

// register functionality
function registerUser() {
    // store new users username
    var registerUsername = document.getElementById('username').value
    // store new users password
    var registerPassword = document.getElementById('password').value
        var registername = document.getElementById('name').value
    // store new user data in an object
    var newUser = {
        username: registerUsername,
        password: registerPassword,
        name: registername
    }
    // loop throught people array to see if the username is taken, or password to short
    for(var i = 0; i < users.length; i++) {
        // check if new username is equal to any already created usernames
        if(registerUser == users[i].username) {
            // alert user that the username is take
            alert('That username is alreat in user, please choose another')
            // stop the statement if result is found true
            break
        // check if new password is 8 characters or more
        } else if (registerPassword.length < 8) {
            // alert user that the password is to short
            alert('That is to short, include 8 or more characters')
            // stop the statement if result is found true
            break
        }
    }
    // push new object to the people array
    users.push(newUser)
    // console the updated people array
    console.log(users)
}
