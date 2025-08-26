const navLinks = document.querySelectorAll("header nav a");
const logoLink = document.querySelector(".logo");
const sections = document.querySelectorAll("section");
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector("header nav");

menuIcon.addEventListener("click", function () {
  menuIcon.classList.toggle("fa-x");
  navbar.classList.toggle("active");
});

const activePage = function () {
  const header = document.querySelector("header");
  const barsBox = document.querySelector(".bars-box");

  header.classList.remove("active");
  setTimeout(function () {
    header.classList.add("active");
  }, 1100);

  navLinks.forEach(function (link) {
    link.classList.remove("active");
  });

  barsBox.classList.remove("active");
  setTimeout(function () {
    barsBox.classList.add("active");
  }, 1100);

  sections.forEach(function (section) {
    section.classList.remove("active");
  });

  menuIcon.classList.remove("fa-x");
  navbar.classList.remove("active");
};

navLinks.forEach(function (link, index) {
  link.addEventListener("click", function () {
    if (!link.classList.contains("active")) {
      activePage();

      link.classList.add("active");

      setTimeout(() => {
        sections[index].classList.add("active");
      }, 1100);
    }
  });
});

logoLink.addEventListener("click", function () {
  if (!navLinks[0].classList.contains("active")) {
    activePage();

    navLinks[0].classList.add("active");

    setTimeout(() => {
      sections[0].classList.add("active");
    }, 1100);
  }
});

const resumeBtns = document.querySelectorAll(".resume-btn");

resumeBtns.forEach(function (btn, index) {
  btn.addEventListener("click", function () {
    const resumeDatils = document.querySelectorAll(".resume-detail");

    resumeBtns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    btn.classList.add("active");

    resumeDatils.forEach(function (detail) {
      detail.classList.remove("active");
    });
    resumeDatils[index].classList.add("active");
  });
});

const arrowRight = document.querySelector(
  ".portfolio-box .navigation .arrow-right"
);
const arrowLeft = document.querySelector(
  ".portfolio-box .navigation .arrow-left"
);

let index = 0;

const activePortfolio = function () {
  const imgSlide = document.querySelector(".portfolio-carousel .img-slide");
  const portfolioDetails = document.querySelectorAll(".portfolio-detail");

  imgSlide.style.transform = `translateX(calc(${index * -100}% - ${
    index * 2
  }rem))`;

  portfolioDetails.forEach(function (detail) {
    detail.classList.remove("active");
  });

  portfolioDetails[index].classList.add("active");
};

arrowRight.addEventListener("click", function () {
  if (index < 4) {
    index++;
    arrowLeft.classList.remove("disabled");
  } else {
    index = 5;
    arrowRight.classList.add("disabled");
  }

  activePortfolio();
});

arrowLeft.addEventListener("click", function () {
  if (index > 1) {
    index--;
    arrowRight.classList.remove("disabled");
  } else {
    index = 0;
    arrowLeft.classList.add("disabled");
  }

  activePortfolio();
});
