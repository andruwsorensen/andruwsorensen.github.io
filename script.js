// script.js

document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('dark-mode-toggle');
    const body = document.body;

    // Check if user has a preferred theme and apply it
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
        toggleButton.textContent = savedTheme === 'dark-mode' ? '☀️ Light Mode' : '🌙 Dark Mode';
    }

    toggleButton.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
        const theme = body.classList.contains('dark-mode') ? 'dark-mode' : '';
        toggleButton.textContent = theme === 'dark-mode' ? '☀️ Light Mode' : '🌙 Dark Mode';

        // Save the user's preference
        localStorage.setItem('theme', theme);
    });
});
