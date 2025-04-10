
const API_URL = "http://localhost:3000/users";

  $(document).ready(function () {
    $("#btnSignIn").on("click", function () {
      const email = $("#signIn-email").val().trim();
      const password = $("#signIn-password").val();
      const confirmPassword = $("#signIn-password-conf").val();

      if (!email || !password || !confirmPassword) {
        alert("Please fill in all fields.");
        return;
      }

      if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
      }

      $.get(`${API_URL}?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`, function (users) {
        if (users.length > 0) {
          // Login successful
          localStorage.setItem("currentUser", JSON.stringify(users[0]));
          alert("Sign-in successful!");
          window.location.href = "./ResumeBuilder_Page.html";
        } else {
          alert("Invalid email or password.");
        }
      }).fail(function () {
        alert("An error occurred during sign-in.");
      });
    });

    $(".signIn-form #btnReset").on("click", function () {
      $(".signIn-form")[0].reset();
    });
  });