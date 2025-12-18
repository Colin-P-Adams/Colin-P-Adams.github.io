(function () {
  const key = "ap_theme_mode";
  const root = document.documentElement;

  function apply(mode) {
    if (mode === "dark") {
      root.classList.add("dark-mode");
      const icon = document.getElementById("theme-toggle-icon");
      if (icon) icon.textContent = "☀️";
    } else {
      root.classList.remove("dark-mode");
      const icon = document.getElementById("theme-toggle-icon");
      if (icon) icon.textContent = "🌙";
    }
    localStorage.setItem(key, mode);
  }

  document.addEventListener("DOMContentLoaded", function () {
    const saved = localStorage.getItem(key);
    apply(saved === "dark" ? "dark" : "light");

    const btn = document.getElementById("theme-toggle");
    if (btn) {
      btn.addEventListener("click", function () {
        const next = root.classList.contains("dark-mode") ? "light" : "dark";
        apply(next);
      });
    }
  });
})();
