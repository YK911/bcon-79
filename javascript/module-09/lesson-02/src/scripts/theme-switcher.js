const themeLink = document.querySelector(
  'link[rel="stylesheet" href*="theme"]'
);

function setTheme(theme) {
  const currTheme = 'light' || 'dark';

  themeLink.setAttribute('href', `./css/${currTheme}-theme.css`);
}
