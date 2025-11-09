function validateClientCreateAccount() {
    var username = document.getElementById("username").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();
    var confirmPassword = document.getElementById("confirm-password").value.trim();

    // Clear all previous error messages
    document.getElementById("usernameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("confirmPasswordError").innerHTML = "";

    // ---------- Username Validation ----------
    if (username === "") {
        document.getElementById("usernameError").innerHTML = "Please enter your username.";
        return false;
    }

    // Username should contain only characters (no digits or symbols)
    if (!/^[a-zA-Z\s]+$/.test(username)) {
        document.getElementById("usernameError").innerHTML = "Username must contain letters only.";
        return false;
    }

    // ---------- Email Validation ----------
    if (email === "") {
        document.getElementById("emailError").innerHTML = "Please enter your email address.";
        return false;
    }

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

    // Minimum 8 characters, at least one letter and one number
    var passFormat = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passFormat.test(password)) {
        document.getElementById("passwordError").innerHTML =
            "Password must be at least 8 characters long and include at least 1 letter and 1 number.";
        return false;
    }

    // Optional: limit password length
    if (password.length > 20) {
        document.getElementById("passwordError").innerHTML =
            "Password must not exceed 20 characters.";
        return false;
    }

    // ---------- Confirm Password Validation ----------
    if (confirmPassword === "") {
        document.getElementById("confirmPasswordError").innerHTML = "Please confirm your password.";
        return false;
    }

    if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").innerHTML =
            "Password and Confirm Password do not match.";
        return false;
    }

    return true; // all checks passed
}

// Attach validation on form submit
document.getElementById("clientCreateForm").addEventListener("submit", function (e) {
    if (!validateClientCreateAccount()) {
        e.preventDefault(); // Stop form submission if validation fails
    }
});
