(() => {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeIcon = document.getElementById('theme-icon');
  
  const THEMES = {
    LIGHT: 'light',
    DARK: 'dark'
  };

  const ICONS = {
    light: 'fa-sun-o',
    dark: 'fa-moon-o'
  };

  function getSavedTheme() {
    return localStorage.getItem('theme') || THEMES.LIGHT;
  }

  function saveTheme(theme) {
    localStorage.setItem('theme', theme);
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    themeIcon.className = `fa ${ICONS[theme]}`;
    saveTheme(theme);
  }

  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || THEMES.LIGHT;
    const newTheme = currentTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
    applyTheme(newTheme);
  }

  themeToggleBtn.addEventListener('click', toggleTheme);

  applyTheme(getSavedTheme());
})();
