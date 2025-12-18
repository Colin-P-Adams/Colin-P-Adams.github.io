(function () {
  const key = "ap_theme";
  const css = document.getElementById("site-css");
  const icon = document.getElementById("theme-toggle-icon");

  function setTheme(mode) {
    if (!css) return;
    const isDark = mode === "dark";
    css.href = isDark ? "{{ '/assets/css/main-dark.css' | relative_url }}" : "{{ '/assets/css/main.css' | relative_url }}";
    if (icon) icon.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem(key, mode);
  }

  document.addEventListener("DOMContentLoaded", function () {
    const saved = localStorage.getItem(key);
    if (saved === "dark" || saved === "light") setTheme(saved);

    const btn = document.getElementById("theme-toggle");
    if (btn) btn.addEventListener("click", function () {
      const next = (localStorage.getItem(key) === "dark") ? "light" : "dark";
      setTheme(next);
    });
  });
})();
