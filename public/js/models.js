'use strict';

const BASE_URL = "http://localhost:3000";

class User {
    constructor({email, fName, lName, id, admin=false}) {
        this.email = email;
        this.firstName = fName;
        this.lastName = lName;
        this.user_id = id;
        this.admin = admin;
        this.fullName = this.firstName + ' ' + this.lastName;
    };

    static async register(formData) {
        console.debug("User.register()", "Form Data->", formData)

        try{
            const res = await axios({
                            method: "POST",
                            url: `${BASE_URL}/users`,
                            data: formData
            });
            const user = new User(res.data);
            return user
        }
        catch(error){
            console.error(error);
            throw new Error(error.message);
        }
    };

    static async getUsers() {
        console.debug('User.getUsers()');

        try{
            const res = await axios.get(`${BASE_URL}/users`);
            return res.data
        }catch(error){
            console.error(error);
            throw new Error(error.message);
        }
    };
};
