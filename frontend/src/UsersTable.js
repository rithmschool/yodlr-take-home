import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';


const UsersTable = () => {
  const data = useSelector(state => state.users, shallowEqual);
  const users = Object.values(data).sort((a, b) => +a.id - b.id)

  return (
    <div className="UsersTable card mt-5">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">State</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <th scope="row">{user.id}</th>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.state}</td>
              <td>
                <button className="btn text-danger">
                  <i class="fa fa-times" aria-hidden="true"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}


export default UsersTable;