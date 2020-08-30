export const supportsDarkMode = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches === true
