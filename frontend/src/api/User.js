import ApiHelper from './ApiHelper';

class User {
  /**
   * Fetch and return an array of user objects.
   */
  static async getAll() {
    return await ApiHelper.request('users');
  }

  /**
   * Fetch and return a single user object specified by id.
   * @param {Number} id 
   */
  static async get(id) {
    return await ApiHelper.request(`users/${id}`);
  }

  /**
   * Create and store user on backend.
   * @param {Object} user - { email, firstName, lastName, state }
   */
  static async create(user) {
    return await ApiHelper.request('users', user, "post");
  }

  /**
   * Update a user on backend.
   * @param {Number} id
   */
  static async update(id) {
    return await ApiHelper.request(`users/${id}`, user, "put");
  }

  /**
   * Delete a user from backend.
   * @param {Number} id
   */
  static async remove(id) {
    return await ApiHelper.request(`users/${id}`, user, "delete");
  }
}


export default User;