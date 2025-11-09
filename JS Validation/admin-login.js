function validateAdminLogin() {
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();

    // Clear previous error messages
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";

    // ---------- Email Validation ----------
    if (email === "") {
        document.getElementById("emailError").innerHTML = "Please enter your email address.";
        return false;
    }

    // Basic email format regex
    var emailFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,}$/;
    if (!emailFormat.test(email)) {
        document.getElementById("emailError").innerHTML = "Please enter a valid email format.";
        return false;
    }

    // ---------- Password Validation ----------
    if (password === "") {
        document.getElementById("passwordError").innerHTML = "Please enter your password.";
        return false;
    }

    // Minimum 8 characters, at least 1 letter and 1 number
    var passFormat = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passFormat.test(password)) {
        document.getElementById("passwordError").innerHTML =
            "Password must be at least 8 characters long and include at least 1 letter and 1 number.";
        return false;
    }

    return true; // All validations passed
}

// Attach validation to form submit
document.getElementById("adminLoginForm").addEventListener("submit", function (e) {
    if (!validateAdminLogin()) {
        e.preventDefault(); // Stop form submission if validation fails
    }
});
