import "./components/header";
import "@/css/travelplus.css";
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
import "@/images/img-23.png";
import "@/images/img-24.png";
import "@/images/1920x800-1.jpg";
import "@/images/1920x800-2.jpg";
import "@/images/1920x800-3.jpg";
import "@/images/1920x800-4.jpg";
import "@/images/1920x800-5.jpg";
import "@/images/1080x1080-1-m.jpg";
import "@/images/1080x1080-2-m.jpg";
import "@/images/1080x1080-3-m.jpg";
import "@/images/1080x1080-4-m.jpg";
import "@/images/1080x1080-5-m.jpg";

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

mainBannerSplide.on("mounted move", function () {
  const slides = document.querySelectorAll(".main-banner .splide__slide");
  slides.forEach((slide) => {
    const title = slide.querySelector("p");
    if (title) {
      // 移除顯示狀態，添加隱藏狀態
      title.classList.remove("banner-title-show");
      title.classList.add("banner-title-hidden");
    }
  });

  // 延遲一點點讓當前活動的幻燈片標題出現
  setTimeout(() => {
    const activeSlide = document.querySelector(
      ".main-banner .splide__slide.is-active"
    );
    if (activeSlide) {
      const activeTitle = activeSlide.querySelector("p");
      if (activeTitle) {
        // 移除隱藏狀態，添加顯示狀態
        activeTitle.classList.remove("banner-title-hidden");
        activeTitle.classList.add("banner-title-show");
      }
    }
  }, 50);
});

mainBannerSplide.mount();
// 主輪播 end

// 特別企劃輪播
const specialProjectSplide = new Splide(".special-project", {
  type: "slide",
  rewind: true,
  autoplay: true,
  perPage: 1,
  gap: 0,
  pagination: true,
  arrows: true,
  breakpoints: {
    1280: {
      perPage: 1,
      pagination: true,
    },
  },
});

specialProjectSplide.mount();
// 特別企劃輪播 end

// 焦點情報
const focusSplide = new Splide(".focus", {
  gap: "2rem",
  rewind: true,
  perPage: 3,
  pagination: false,
  breakpoints: {
    1100: {
      fixedWidth: "250px",
      perPage: 1,
      perMove: 1,
    },
  },
});

focusSplide.mount();
// 焦點情報 end
