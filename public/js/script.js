
const BASE_URL = "http://localhost:3000";

// Populates users list admin.html
async function userListing () {
  const users = await axios.get(`${BASE_URL}/users`);

  for (let each of users.data) {
    $("#user-list").append($("<li>", {text: `${each.firstName} ${each.lastName} - ${each.state}`}));
    }
}

/** event listener callback for submitting form
 * on signup.html. Submits information to backend
 * and redirects user to admin.html */
async function register(evt) {
  evt.preventDefault();
    const email = $("#input-email").val()
    const firstName = $("#input-firstName").val()
    const lastName = $("#input-lastName").val()
    const users = await axios.post(
      `${BASE_URL}/users`,
      {email, firstName, lastName});
    window.location.href = "/admin.html"
}

// Called for admin.html
if ($("#user-list").length){
  userListing();
}

// event listener called for signup.html
if ($("#signup-form").length){
  $("#signup-form").submit(register);
}
