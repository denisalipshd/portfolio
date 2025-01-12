document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const btnDarkMode = document.getElementById("btnDarkMode");
  const icon = btnDarkMode.querySelector("i");

  // Set tema awal dari localStorage
  const savedTheme = localStorage.getItem("theme") || "dark";
  body.setAttribute("data-bs-theme", savedTheme);
  icon.classList.add(savedTheme === "dark" ? "bi-brightness-high" : "bi-moon");

  btnDarkMode.addEventListener("click", () => {
    const currentTheme = body.getAttribute("data-bs-theme");

    if (currentTheme === "dark") {
      body.setAttribute("data-bs-theme", "light");
      icon.classList.remove("bi-brightness-high");
      icon.classList.add("bi-moon");
      localStorage.setItem("theme", "light"); // Simpan tema
    } else {
      body.setAttribute("data-bs-theme", "dark");
      icon.classList.remove("bi-moon");
      icon.classList.add("bi-brightness-high");
      localStorage.setItem("theme", "dark"); // Simpan tema
    }
  });
});

