import "@/css/plugins/splide.min.css";
import Splide from "../plugins/splide.min.js";

const bodyClass = document.querySelector("body").classList;
const menuButton = document.querySelector("#menuButton");
const searchButton = document.querySelector("#searchButton");
const menuShadow = document.querySelector("#menuShadow");
const searchButtonClass = searchButton.classList;
const navbarClass = document.querySelector("#navbarWrapper").classList;
const menuShadowClass = document.querySelector("#menuShadow").classList;
const hamburgerIconClass = document.querySelector("#hamburgerIcon").classList;
const closeIconClass = document.querySelector("#closeIcon").classList;
const pcSeach = document.querySelector("#pcSeach");
const searchMenuClass = document.querySelector("#searchMenu").classList;
const searchMenuShadow = document.querySelector("#searchMenuShadow");
const searchMenuShadowClass =
  document.querySelector("#searchMenuShadow").classList;
const mbSearchMenuClass = document.querySelector("#mbSearchMenu").classList;
const cancelButton = document.querySelector("#cancelButton");

// mb 選單按鈕
menuButton.addEventListener("click", function () {
  searchButtonClass.toggle("hidden");
  navbarClass.toggle("openMenu");
  bodyClass.toggle("overflow-hidden");
  menuShadowClass.toggle("openMenuShadow");
  menuShadowClass.toggle("!z-10");
  hamburgerIconClass.toggle("!hidden");
  closeIconClass.toggle("!block");
});
// mb 選單按鈕 end

// mb 陰影
menuShadow.addEventListener("click", function () {
  searchButtonClass.toggle("hidden");
  navbarClass.toggle("openMenu");
  bodyClass.toggle("overflow-hidden");
  menuShadowClass.toggle("openMenuShadow");
  menuShadowClass.toggle("!z-10");
  hamburgerIconClass.toggle("!hidden");
  closeIconClass.toggle("!block");
});
// mb 陰影 end

// pc 搜尋
pcSeach.addEventListener("focus", function () {
  searchMenuClass.add("!block");
  searchMenuShadowClass.add("!block");
});

// pc 搜尋陰影
searchMenuShadow.addEventListener("click", function () {
  searchMenuClass.remove("!block");
  searchMenuShadowClass.remove("!block");
});
// pc 搜尋 end

// mb 搜尋
searchButton.addEventListener("click", function () {
  mbSearchMenuClass.add("!block");
});
cancelButton.addEventListener("click", function () {
  mbSearchMenuClass.remove("!block");
});
// mb 搜尋 end

// 導覽列
const navbarSplide = new Splide(".navbar", {
  autoWidth: true,
  perMove: 16,
  drag: "free",
  pagination: false,
  breakpoints: {
    1100: {
      destroy: true,
    },
  },
});

navbarSplide.mount();
// 導覽列 end
