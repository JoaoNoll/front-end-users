const axios = require('axios').default;

class User{
    constructor(){
        this.name = document.getElementById('txtName');
        this.age = document.getElementById('txtAge');
        this.email = document.getElementById('txtEMail');
        this.phone = document.getElementById('txtPhone');
        this.btnRegisterUser = document.getElementById('brnRegister');

        this.getUsers();
    }


    getUsers(){
        axios.get('http://localhost:3000/users')
        .then((result) => {
            this.recoveryUsers(result.data.userList);
        })
        .catch((error) =>{
            console.log(error);
        })
    }

    recoveryUsers(data){
        for(user of data){
            const html = `
            <div class='col mt-5'>
                <div class='card'>
                    <div class= 'user-body'>
                        <h3 class='user-name'>${user.name} </h3>
                        <p class= 'user-email'> ${user.email}</p>
                        <p class= 'user-age'> ${user.age}</p>
                        <p class= 'user-phone'> ${user.phone}</p>
                    </div>
                </div>
            </div>
            `;

            document.getElementById('usersBoard').innerHTML += html;
        }
        
    }



}


new User();
