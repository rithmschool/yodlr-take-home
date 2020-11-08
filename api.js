var axios = require('axios');
var PORT = process.env.PORT || 3000;
const BASE_URL = `http://localhost:${PORT}`;


async function getUsers(){
    let users;
    try {
        users = await axios.get(`${BASE_URL}/users`);
    } catch(error) {
        throw (error);
    }
    return users.data;
};


module.exports = {
    getUsers
}