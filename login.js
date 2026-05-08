// 1. Existing Toggle Logic (Keep this)
const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtnToggle = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtnToggle.addEventListener('click', () => {
    container.classList.remove('active');
});

// 2. NEW: Validation & Redirect Logic
const loginSubmit = document.querySelector('.form-box.login .btn');
const registerSubmit = document.querySelector('.form-box.register .btn');

// Function for Login Validation
loginSubmit.addEventListener('click', (e) => {
    e.preventDefault(); // Stop page refresh
    
    // Get the inputs specifically for the login form
    const inputs = document.querySelectorAll('.form-box.login input');
    let allFilled = true;

    inputs.forEach(input => {
        if (input.value.trim() === "") {
            allFilled = false;
        }
    });

    if (allFilled) {
        alert("Login Successful! Redirecting...");
        window.location.href = 'index.html';
    } else {
        alert("Please fill in all login fields!");
    }
});

// Function for Register Validation
registerSubmit.addEventListener('click', (e) => {
    e.preventDefault(); // Stop page refresh
    
    // Get the inputs specifically for the register form
    const inputs = document.querySelectorAll('.form-box.register input');
    let allFilled = true;

    inputs.forEach(input => {
        if (input.value.trim() === "") {
            allFilled = false;
        }
    });

    if (allFilled) {
        alert("Registration Successful! Redirecting to Homepage...");
        window.location.href = 'index.html';
    } else {
        alert("Please fill in all registration fields!");
    }
});