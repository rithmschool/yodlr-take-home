const $message = $('#message');
const $userTable = $('#userTable');
let userId;

$(document).ready(async () => {
  const users = await axios.get(`/users`);
  for (let user of users.data)
    $userTable.append(
      addUser(user.id, user.email, user.firstName, user.lastName, user.state)
    );

  $('#userTable tr #delete').on('click', async function () {
    userId = $(this).closest('tr').data('id');
    try {
      const req = await axios.delete(`/users/${userId}`);
      if (req.status === 204) {
        $message.addClass('alert-success');
        $message.text('User removed');
        $(this).closest('tr').remove();
      }
    } catch (err) {
      $message.addClass('alert-danger');
      $message.text('Delete failed, try again.');
    }
  });

  // $userRow.on('click', async evt => {
  //   console.log(evt.target);
  // .closest('tr').attr('data-id')
  // get the current row
  // var currentRow = $(this).closest('tr');

  // var col1 = currentRow.find($(this).closest('td')).html(); // get current row 1st table cell TD value
  // var col2 = currentRow.find('.pd-name').html(); // get current row 2nd table cell TD value

  // var data = col1 + '\n' + col2;

  // try {
  //   const req = await axios.delete(`/users/${evt.id}`);
  //   if (req.status === 200) {
  //     $message.addClass('alert-success');
  //     $message.text('Registration Successful!');
  //   }
  // } catch (err) {
  //   $message.addClass('alert-danger');
  //   $message.text('Registration failed. Please try again.');
  // }
  // });
});

// accepts props and returns a string of HTML
addUser = (id, emailInput, firstNameInput, lastNameInput, state) => {
  return `
      <tr data-id=${id} id="userRow">
          <td id="id">${id}</td>
          <td>${emailInput}</td>
          <td>${firstNameInput}</td>
          <td>${lastNameInput}</td>
          <td>${state}</td>
          <td id="delete">
            <button class="btn btn-danger btn-sm">X</button>
          </td>
      </tr>
      `;
};
