const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

themeToggle.addEventListener('click', () => {
    // 1. Toggle the dark-theme class on the body
    body.classList.toggle('dark-theme');

    // 2. Change the icon between Moon and Sun
    if (body.classList.contains('dark-theme')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        themeIcon.style.color = "yellow"; // Make the sun glow yellow
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        themeIcon.style.color = "black"; // Moon color in light mode
    }
});



// Target the buttons
const navLoginBtn = document.querySelector('.login-btn');
const startExploringBtn = document.querySelector('.titles button');

// Function to go to login page
const goToLogin = () => {
    window.location.href = 'login.html';
};

// Add click events
if (navLoginBtn) navLoginBtn.addEventListener('click', goToLogin);
if (startExploringBtn) startExploringBtn.addEventListener('click', goToLogin);