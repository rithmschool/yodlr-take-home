const $userTable = $('#userTable');

$(document).ready(async () => {
  const users = await axios.get(`/users`);
  console.log(users);
  for (let user of users.data)
    $userTable.append(
      addUser(user.id, user.email, user.firstName, user.lastName, user.state)
    );
});

// accepts props and returns a string of HTML
addUser = (id, emailInput, firstNameInput, lastNameInput, state) => {
  return `
      <tr>
          <td>${id}</td>
          <td>${emailInput}</td>
          <td>${firstNameInput}</td>
          <td>${lastNameInput}</td>
          <td>${state}</td>
      </tr>
      `;
};
