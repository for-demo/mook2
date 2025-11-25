import "@/css/index.css";
import "@/css/plugins/splide.min.css";
import "@/css/plugins/aos.css";
import Splide from "./plugins/splide.min.js";
import AOS from "./plugins/aos.js";

AOS.init();

const splide = new Splide("#splide", {
  type: "fade",
  rewind: true,
  pagination: false,
  arrows: false,
  autoplay: true,
  interval: 4000,
  speed: 800,
});

splide.mount();

const bodyClass = document.querySelector("body").classList;
const header = document.querySelector("#header");
const headerClass = document.querySelector("#header").classList;
const memuButton = document.querySelector("#memuButton");
const menuIconClass = document.querySelector("#menuIcon").classList;
const navbarClass = document.querySelector("#navbar").classList;
const scrollButton = document.querySelector("#scrollButton");
const about = document.querySelector("#about");
const world = document.querySelector("#world");
const worldTarget = document.querySelector("#worldTarget");

window.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > 0) {
    header.classList.add("header-scrolled");
  } else {
    header.classList.remove("header-scrolled");
  }
});

memuButton.addEventListener("click", function () {
  bodyClass.toggle("overflow-hidden");
  headerClass.toggle("header-active");
  menuIconClass.toggle("menuIcon-active");
  navbarClass.toggle("navbar-active");
});

scrollButton.addEventListener("click", function () {
  about.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

world.addEventListener("click", function () {
  worldTarget.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
  bodyClass.remove("overflow-hidden");
  headerClass.remove("header-active");
  menuIconClass.remove("menuIcon-active");
  navbarClass.remove("navbar-active");
});

// gotop
if (
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame
) {
  let requestAnimationFrame =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;
}

document.addEventListener("DOMContentLoaded", function () {
  const goTopButton = document.querySelector("#gotop");
  const windowViewPortHeight = window.innerHeight;
  let isRequestingAnimationFrame = false;

  if (!goTopButton) {
    return;
  }

  goTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  window.addEventListener("scroll", function () {
    if (!isRequestingAnimationFrame) {
      requestAnimationFrame(filterGoTopButtonVisibility);
      isRequestingAnimationFrame = true;
    }
  });

  function filterGoTopButtonVisibility() {
    let windowPageYOffset =
      window.pageYOffset || document.documentElement.scrollTop;
    if (windowPageYOffset > windowViewPortHeight) {
      goTopButton.classList.add("show");
      isRequestingAnimationFrame = false;
    } else {
      goTopButton.classList.remove("show");
      requestAnimationFrame(filterGoTopButtonVisibility);
    }
  }
});
// gotop end
