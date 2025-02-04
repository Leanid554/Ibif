document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.getElementById("burger-menu");
  const navLinks = document.getElementById("nav-links");
  const menuItems = document.querySelectorAll(
    "#nav-links p, #nav-links button"
  );

  burgerMenu.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });

  menuItems.forEach((item) => {
    item.addEventListener("click", function () {
      navLinks.classList.remove("active");
    });
  });
});

const customCheckbox = document.querySelector(".custom-checkbox");

customCheckbox.addEventListener("click", function () {
  const isChecked = customCheckbox.classList.toggle("checked");
  customCheckbox.setAttribute("aria-checked", isChecked);
});
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("[data-scroll]").forEach((item) => {
    item.addEventListener("click", function (event) {
      event.preventDefault();

      const targetId = this.getAttribute("data-scroll");
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 50,
          behavior: "smooth",
        });
      }
    });
  });
});
