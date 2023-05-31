const menuLinks = Array.from(document.querySelectorAll(".navbar-content-services-link"));
const menuAboutLink = document.querySelector(".navbar-content-link");
const sideMenuCheckbox = document.getElementById("side-menu");

menuLinks.forEach(function (link) {
   link.addEventListener("click", function () {
      sideMenuCheckbox.checked = false;
   });
});

menuAboutLink.addEventListener("click", function () {
   sideMenuCheckbox.checked = false;
});