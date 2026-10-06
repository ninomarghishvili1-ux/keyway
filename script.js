document.addEventListener("DOMContentLoaded", function () {
  /* =========================
MOBILE MENU
========================= */

  const menuBtn = document.getElementById("menuBtn");
  const nav = document.getElementById("mainNav");

  menuBtn.addEventListener("click", function () {
    const isOpen = nav.classList.toggle("open");

    menuBtn.setAttribute("aria-expanded", String(isOpen));

    menuBtn.textContent = isOpen ? "✕" : "☰";
  });

  /* =========================
CLOSE MOBILE MENU
========================= */

  const navLinks = nav.querySelectorAll("a");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("open");

      menuBtn.setAttribute("aria-expanded", "false");

      menuBtn.textContent = "☰";
    });
  });

  /* =========================
LANGUAGE SWITCHER
========================= */

  const languageButtons = document.querySelectorAll(".lang");

  const translatableElements = document.querySelectorAll("[data-ka]");

  languageButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const selectedLanguage = button.dataset.lang;

      languageButtons.forEach(function (btn) {
        btn.classList.remove("active");
      });

      button.classList.add("active");

      translatableElements.forEach(function (element) {
        const translation = element.dataset[selectedLanguage];

        if (translation) {
          element.textContent = translation;
        }
      });

      document.documentElement.lang = selectedLanguage;
    });
  });

  /* =========================
CONTACT FORM
========================= */

  const form = document.getElementById("contactForm");

  const formMessage = document.getElementById("formMessage");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    formMessage.textContent = "მადლობა! თქვენი მოთხოვნა წარმატებით გაიგზავნა.";

    form.reset();

    setTimeout(function () {
      formMessage.textContent = "";
    }, 5000);
  });
});
