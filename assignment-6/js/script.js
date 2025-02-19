// To toggle the backgroung color of the navbar
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      navbar.classList.add("navbar--scrolled");
    } else {
      navbar.classList.remove("navbar--scrolled");
    }
  });

  // Close mobile menu when nav links are clicked
  const mobileNavLinks = document.querySelectorAll(".nav__links--mobile a");
  const mobileMenuCheckbox = document.getElementById("nav__mobile__toggle");

  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenuCheckbox.checked = false;
    });
  });
});

// To remove the id "#" from the address bar
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });

        setTimeout(() => {
          history.replaceState(null, null, " ");
        }, 500);
      }
    });
  });
});
