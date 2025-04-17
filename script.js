window.togglemode = function () {
    const body = document.body;
    const btn = document.getElementById("themeToggle");

    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");

    // update button text
    if (body.classList.contains("dark-mode")) {
        btn.textContent = "Light Mode";
    } else {
        btn.textContent = "Dark Mode";
    }
};

  // set initial theme and button label
document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const btn = document.getElementById("themeToggle");

    body.classList.add("light-mode");
    if (btn) btn.textContent = "Dark Mode";
});