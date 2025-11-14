import "./components/header";
import "@/css/tagList.css";
import "@/images/Ad-01.jpg";
import "@/images/Ad-02.jpg";
import "@/images/Ad-03.jpg";
import "@/images/Ad-05.jpg";
import "@/images/Ad-07.jpg";
import "@/images/Ad-08.jpg";
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
import "@/images/img-21.jpg";

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
