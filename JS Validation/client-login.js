function validateClientLogin() {
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();

    // Clear previous error messages
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";

    // Email validation
    if (email === "") {
        document.getElementById("emailError").innerHTML = "Please enter your email address.";
        return false;
    }

    // Email format check
    var emailFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,}$/;
    if (!emailFormat.test(email)) {
        document.getElementById("emailError").innerHTML = "Please enter a valid email format.";
        return false;
    }

    // Password validation
    if (password === "") {
        document.getElementById("passwordError").innerHTML = "Please enter your password.";
        return false;
    }

    // Password length and format check
    // Minimum 8 characters, at least 1 letter and 1 number
    var passFormat = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passFormat.test(password)) {
        document.getElementById("passwordError").innerHTML =
            "Password must be at least 8 characters long and include at least 1 letter and 1 number.";
        return false;
    }

    return true; // if all validations pass
}

// Attach validation to form submit
document.getElementById("clientLoginForm").addEventListener("submit", function (e) {
    if (!validateClientLogin()) {
        e.preventDefault(); // Stop form submission
    }
});
