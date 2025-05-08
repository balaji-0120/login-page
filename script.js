// Mock users database
let users = [];

// Show the login form
function showLoginForm() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
}

// Show the registration form
function showRegisterForm() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
}

// Register user
function registerUser() {
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Check if user already exists
    if (users.some(user => user.email === email)) {
        alert("User already exists.");
        return;
    }

    users.push({ email, password });
    alert("Registration successful! Please log in.");
    showLoginForm();
}

// Login user
function loginUser() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
        alert("Login successful!");
        showSecuredPage();
    } else {
        alert("Invalid credentials.");
    }
}

// Show secured page
function showSecuredPage() {
    document.getElementById('form-container').style.display = 'none';
    document.getElementById('secured-page').style.display = 'block';
}

// Logout user
function logoutUser() {
    document.getElementById('secured-page').style.display = 'none';
    showLoginForm();
}

// Initial setup
showLoginForm();