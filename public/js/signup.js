const $message = $('#message');
const $signUpForm = $('#signUpForm');

$signUpForm.on('submit', evt => {
  evt.preventDefault();
  submitForm(evt);
});

const submitForm = async evt => {
  const emailInput = $('#emailInput').val();
  const firstNameInput = $('#firstNameInput').val();
  const lastNameInput = $('#lastNameInput').val();

  let body = {
    email: emailInput,
    firstName: firstNameInput,
    lastName: lastNameInput
  };

  $signUpForm[0].reset();

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
