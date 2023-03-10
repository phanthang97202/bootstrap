const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
console.log(closeMenu);
const navigation__menu = document.querySelector(".navigation__menu");

openMenu.addEventListener("click", () => {
  navigation__menu.classList.remove("activeMenu");
});
closeMenu.addEventListener("click", () => {
  navigation__menu.classList.add("activeMenu");
});
navigation__menu.addEventListener("click", (e) => {
  if (e.target === navigation__menu) {
    navigation__menu.classList.add("activeMenu");
  }
});
// FILTER
const openFilter = document.getElementById("openFilter");
console.log(openFilter);
const closeFilter = document.getElementById("closeFilter");
const sidebar = document.querySelector(".sidebar");

openFilter.addEventListener("click", () => {
  sidebar.classList.remove("activeFilter");
  closeFilter.style.display = "block";
});
closeFilter.addEventListener("click", () => {
  sidebar.classList.add("activeFilter");
});
sidebar.addEventListener("click", (e) => {
  if (e.target === sidebar) {
    sidebar.classList.add("activeFilter");
  }
});
