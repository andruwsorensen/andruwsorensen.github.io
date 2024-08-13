document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('dark-mode-toggle');
    const mobileNavToggle = document.getElementById('mobile-nav-toggle');
    const nav = document.querySelector('nav');
    const body = document.body;

    // Dark mode toggle
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
        toggleButton.textContent = savedTheme === 'dark-mode' ? '☀️ Light Mode' : '🌙 Dark Mode';
    }

    toggleButton.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
        const theme = body.classList.contains('dark-mode') ? 'dark-mode' : '';
        toggleButton.textContent = theme === 'dark-mode' ? '☀️ Light Mode' : '🌙 Dark Mode';
        localStorage.setItem('theme', theme);
    });

    // Mobile navigation toggle
    mobileNavToggle.addEventListener('click', function () {
        nav.classList.toggle('mobile-nav');
        mobileNavToggle.classList.toggle('active');
    });
});
