'use strict';

async function getListOfAllUsers(){
    const userList = await User.getUsers();
    userList.forEach((user)=> {
        const newUser = new User(user);
        $('#user-list')
            .append($(`<div class="user-info-card">
                            <h2>User ${newUser.user_id} </h2>
                            <p> Name: ${(newUser.firstName) ? newUser.fullName : "N/A"} </p>
                            <p> Email: ${newUser.email} </p>
                            <p> Admin: ${newUser.admin} </p>
                        </div>`))
    });
}
getListOfAllUsers();
