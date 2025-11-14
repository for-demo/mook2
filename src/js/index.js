import "./components/header";
import "@/css/index.css";
import "@/css/plugins/splide.min.css";
import Splide from "./plugins/splide.min.js";
import "@/images/Ad-01.jpg";
import "@/images/Ad-02.jpg";
import "@/images/Ad-03.jpg";
import "@/images/Ad-05.jpg";
import "@/images/Ad-07.jpg";
import "@/images/Ad-08.jpg";
import "@/images/img-01.jpg";
import "@/images/img-02.jpg";
import "@/images/img-03.jpg";
import "@/images/img-04.jpg";
import "@/images/img-05.jpg";
import "@/images/img-06.jpg";
import "@/images/img-07.jpg";
import "@/images/img-08.jpg";
import "@/images/img-10.jpg";
import "@/images/img-11.jpg";
import "@/images/img-12.jpg";
import "@/images/img-13.jpg";
import "@/images/img-14.jpg";
import "@/images/img-15.jpg";
import "@/images/img-16.jpg";
import "@/images/img-17.jpg";
import "@/images/img-18.jpg";
import "@/images/img-19.jpg";
import "@/images/img-20.jpg";

// gotop
let requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame;

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

// 主輪播
const mainBannerSplide = new Splide(".main-banner", {
  type: "fade",
  rewind: true,
  autoplay: true,
});

mainBannerSplide.mount();
// 主輪播 end

// 景編精選
const sceneSplide = new Splide(".scene", {
  gap: "2rem",
  rewind: true,
  perPage: 4,
  pagination: false,
  breakpoints: {
    1100: {
      autoWidth: true,
      perPage: 1,
      perMove: 1,
    },
  },
});

sceneSplide.mount();
// 景編精選 end
