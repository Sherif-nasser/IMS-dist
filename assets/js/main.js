let menu = document.getElementById("humbergerMenu");
let sidebar = document.getElementById("sidebarToggle");

menu.addEventListener("click", () => {
  sidebar.classList.toggle("d-none");
  sidebar.classList.toggle("fade-in");
});
