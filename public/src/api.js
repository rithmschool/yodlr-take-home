import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class YodlrApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${YodlrApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a user by id. */

  static async getUser(id) {
    let res = await this.request(`users/${id}`);
    return res;
  }

  // get details on all users
  static async getUsers() {
    let res = await this.request(`users`);
    return res;
  }

  // update user
  static async updateUser(id, formData) {
    let res = await this.request(`users/${id}`, formData, "PUT");
    return res.user;
  }

  // delete user
  static async deleteUser(id) {
    await this.request(`users/${id}`, {}, "DELETE");
  }
  
  // login user
  static async login(formData) {
    let res = await this.request(`auth/token`, formData, "POST");
    this.token = res.token;
    return this.token;
  }

  // logout user
  static logout() {
    this.token = null;
  }

  // signup new user
  static async signup(formData) {
    await this.request(`users`, formData, "POST");
  }
}

export default YodlrApi;