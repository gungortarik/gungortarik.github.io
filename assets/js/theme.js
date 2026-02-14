(() => {
  const KEY = "theme";
  const btn = document.getElementById("themeToggle");
  if (!btn) return;

  const icon = btn.querySelector(".icon");
  const label = btn.querySelector(".label");

  const apply = (mode) => {
    document.body.classList.toggle("light", mode === "light");
    if (icon) icon.textContent = mode === "light" ? "☀" : "☾";
    if (label) label.textContent = mode === "light" ? "Light" : "Dark";
    localStorage.setItem(KEY, mode);
  };

  // initial
  const saved = localStorage.getItem(KEY);
  if (saved === "light" || saved === "dark") apply(saved);

  btn.addEventListener("click", () => {
    const next = document.body.classList.contains("light") ? "dark" : "light";
    apply(next);
  });
})();