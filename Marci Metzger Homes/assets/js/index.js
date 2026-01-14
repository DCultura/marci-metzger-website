const hamMenu = document.getElementById("ham-menu");
const navBar = document.getElementById("nav-bar");

hamMenu.addEventListener("click", () => {
  navBar.classList.toggle("active");
  hamMenu.classList.toggle("open");
});

document.querySelectorAll("#nav-bar a").forEach(link => {
  link.addEventListener("click", () => {
    navBar.classList.remove("active");
  });
});
