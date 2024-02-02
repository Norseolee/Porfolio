document.addEventListener("DOMContentLoaded", function () {
  // NAVBAR TOGGLE
  let menu = document.querySelector(".logo");
  menu.addEventListener("click", function (event) {
    document.body.classList.toggle("menu-open");
  });

  // X AND BARS CHANGE
  menu.addEventListener("click", function () {
    let mainNavigation = document.querySelector("#main-nav-wrap");
    let menuToggle = document.querySelector(".menu-toggle");
    if (menuToggle.classList.contains("fa-bars")) {
      menuToggle.classList.remove("fa-bars");
      menuToggle.classList.add("fa-x");

      mainNavigation.style.display = "block";
    } else {
      menuToggle.classList.add("fa-bars");
      menuToggle.classList.remove("fa-x");
      mainNavigation.style.display = "none";
    }
  });

  //   NAVIGATION
  let navLinks = document.querySelectorAll(".main-navigation a");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      let targetId = link.getAttribute("href").substring(1);
      let targetSection = document.getElementById(targetId);

      if (targetSection) {
        navLinks.forEach(function (navLink) {
          navLink.parentElement.classList.remove("current");
        });
        link.parentElement.classList.add("current");

        targetSection.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  // PROJECT-CONTENT
  let readmoreButtons = document.querySelectorAll("#model-info");
  let projectsContent = document.querySelectorAll(".projects-content");
  let closeProjectButtons = document.querySelectorAll(".close-project");
  document.addEventListener("click", function (event) {
    const isModelButton = event.target.id === "model-info";
    const isCloseButton = event.target.matches(".close-project");
    const isProjectContent = event.target.closest(".projects-content");

    if (isModelButton || isCloseButton) {
      let index = isModelButton
        ? Array.from(readmoreButtons).indexOf(event.target)
        : Array.from(closeProjectButtons).indexOf(event.target);

      // toggle visibility
      projectsContent[index].classList.toggle("content");
      // Disable scrolling when opening content
      document.body.style.overflow = projectsContent[index].classList.contains(
        "content"
      )
        ? "hidden"
        : "auto";
    } else if (!isProjectContent) {
      // Remove content when clicking outside the content
      projectsContent.forEach((content) => content.classList.remove("content"));
      // Enable scrolling when closing project content
      document.body.style.overflow = "auto";
    }
  });

  // DISABLE PROJECTS ON THE PROGRESS
  let disablewebsite = document.querySelector(".button-disable");
  disablewebsite.addEventListener("click", function () {
    alert(
      "This website is still under development, but feel free to check out the code. Sorry for inconvenience"
    );
  });
});
