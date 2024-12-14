// Select the button and the body
const themeToggleButton = document.getElementById('theme-toggle-btn');
const body = document.body;

// Add click event listener to toggle the theme
themeToggleButton.addEventListener('click', () => {
  // Check the current theme
  const isLightTheme = body.classList.contains('light-theme');

  // Toggle classes for themes
  body.classList.toggle('light-theme', !isLightTheme);
  body.classList.toggle('dark-theme', isLightTheme);

  // Update button text
  themeToggleButton.textContent = isLightTheme ? 'Switch to Light Mode' : 'Switch to Dark Mode';
});
