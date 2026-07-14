const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// 1. Check for saved preference on page load, fallback to 'light'
const savedTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', savedTheme);

// 2. Handle theme toggle click
themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    // Apply theme changes to HTML
    htmlElement.setAttribute('data-theme', newTheme);
    
    // Save preference long-term
    localStorage.setItem('theme', newTheme);
});
