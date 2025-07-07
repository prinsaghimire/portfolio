const applyTheme = () => {
  document.documentElement.classList.toggle(
    "dark",
    localStorage.theme === "dark" || !("theme" in localStorage),
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
