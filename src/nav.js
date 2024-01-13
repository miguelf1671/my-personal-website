const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".menu-button");

navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");

  console.log(visibility);
});
