
const API_URL = "http://localhost:3000/users";

$(document).ready(function () {
    $("#btnRegister").on("click", function () {
        const name = $("#signUp-name").val().trim();
        const email = $("#signUp-email").val().trim();
        const phone = $("#signUp-phone").val().trim();
        const password = $("#signUp-password").val();
        const confirmPassword = $("#signUp-password-conf").val();

        if (!name || !email || !phone || !password || !confirmPassword) {
        alert("Please fill in all fields.");
        return;
        }

        if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
        }

        // Check if user already exists
        $.get(`${API_URL}?email=${encodeURIComponent(email)}`, function (users) {
        if (users.length > 0) {
            alert("A user with this email already exists.");
        } else {
            // Save new user
            $.ajax({
            url: API_URL,
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify({ name, email, phone, password }),
            success: function () {
                alert("User registered successfully!");
                $(".signUp-form")[0].reset();
            },
            error: function () {
                alert("An error occurred while registering.");
            }
            });
        }
        });
    });

    // Show/hide password button funtion
    $("#btnShowHide-password").click(function() {
    
        if ($(this).hasClass("show/hide")) {
            $("#signUp-password").attr("type", "text");
        } else {
            $("#signUp-password").attr("type", "password");
        }
        $(this).toggleClass("show/hide");
    });

       // Show/hide confirm password button funtion
       $("#btnShowHide-conf-Password").click(function() {
    
        if ($(this).hasClass("show/hide")) {
            $("#signUp-password-conf").attr("type", "text");
        } else {
            $("#signUp-password-conf").attr("type", "password");
        }
        $(this).toggleClass("show/hide");
    });

    $("#btnReset").on("click", function () {
        $(".signUp-form")[0].reset();
    });
});
