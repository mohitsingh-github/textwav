 let users = [];
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