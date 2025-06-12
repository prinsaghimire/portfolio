const applyTheme = () => {
  document.documentElement.classList.toggle(
    "dark",
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches),
  );
};

(function () {
  document.addEventListener("DOMContentLoaded", function () {
    try {
      applyTheme();
    } catch (e) {
      console.warn("Theme check failed:", e);
    }
  });
})();
