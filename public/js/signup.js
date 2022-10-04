const $message = $('#message');
const $signUpForm = $('#signUpForm');

// POST /users
$signUpForm.on('submit', evt => {
  evt.preventDefault();
  submitForm();
});

const submitForm = async () => {
  // GET FORM DATA FOR AXIOS REQ
  const emailInput = $('#emailInput').val();
  const firstNameInput = $('#firstNameInput').val();
  const lastNameInput = $('#lastNameInput').val();

  let body = {
    email: emailInput,
    firstName: firstNameInput,
    lastName: lastNameInput
  };

  $signUpForm[0].reset(); // reset form inputs

  try {
    const req = await axios.post(`/users`, body);
    if (req.status === 200) {
      $message.addClass('alert-success');
      $message.text('Registration Successful!');
    }
  } catch (err) {
    $message.addClass('alert-danger');
    $message.text('Registration failed. Please try again.');
  }
};
