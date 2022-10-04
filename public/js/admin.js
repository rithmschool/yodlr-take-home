const $message = $('#message');
const $userTable = $('#userTable');
let userId;
let values = [];

$(document).ready(async () => {
  // RENDERS USER INFO ON PAGE LOAD
  const users = await axios.get(`/users`);
  for (let user of users.data)
    $userTable.append(
      addUser(user.id, user.email, user.firstName, user.lastName, user.state)
    );

  $('#userTable tr').on('click', function () {
    // GET DATA FROM CLICKED ROW
    var $row = $(this).closest('tr');
    var $columns = $row.find('td');
    values = [];
    $.each($columns, function (i, item) {
      values.push(item.innerText);
    });

    // SHOW MODAL WITH EDIT FORM
    jQuery.noConflict(); //https://stackoverflow.com/a/34870788
    $('#myModal').modal('show');

    // SET PRE-FILL USER DATA IN EDIT USER FORM
    $('#emailInput').val(values[1]);
    $('#firstNameInput').val(values[2]);
    $('#lastNameInput').val(values[3]);
  });

  // PUT /users/:id
  $('#editForm').on('submit', async evt => {
    evt.preventDefault();
    // GET FORM DATA FOR AXIOS REQ
    let body = {
      id: values[0],
      email: $('#emailInput').val(),
      firstName: $('#firstNameInput').val(),
      lastName: $('#lastNameInput').val(),
      state: values[4]
    };

    try {
      const req = await axios.put(`/users/${body.id}`, body);
      if (req.status === 200) {
        $message.addClass('alert-success');
        $message.text('User info saved');
        $('#myModal').modal('hide');
        window.location.reload();
      }
    } catch (err) {
      $message.addClass('alert-danger');
      $message.text('Edit failed, try again.');
    }
  });

  // DELETE /users/:id
  $('#delete').on('click', async () => {
    try {
      const req = await axios.delete(`/users/${values[0]}`);
      if (req.status === 204) {
        $message.addClass('alert-success');
        $message.text('User removed');
        $('#userTable tr[data-id="' + values[0] + '"]').remove(); //https://stackoverflow.com/a/40374552
        $('#myModal').modal('hide');
      }
    } catch (err) {
      $message.addClass('alert-danger');
      $message.text('Delete failed, try again.');
    }
  });
});

// accepts props and returns a string of HTML
addUser = (id, emailInput, firstNameInput, lastNameInput, state) => {
  return `
      <tr data-id=${id}>
          <td>${id}</td>
          <td>${emailInput}</td>
          <td>${firstNameInput}</td>
          <td>${lastNameInput}</td>
          <td>${state}</td>
      </tr>
      `;
};
