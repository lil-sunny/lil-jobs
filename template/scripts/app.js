const bannerContent = document.getElementById("bannerContent");
const workspace = document.getElementById("workspace");
const selectedFilters = document.getElementById("selectedFilters");
// header
const header = document.getElementById("header");
const filtersOpen = document.getElementById("filtersOpen");
const menu = document.getElementById("menu");

function setBar() {
  workspace.style.marginTop = -selectedFilters.clientHeight - 120 + "px";
  bannerContent.style.paddingBottom = selectedFilters.clientHeight + 120 + "px";
}

// function setHeader() {
//   const menu = document.getElementById("menu");
//   if (!menu) {
//     if (window.scrollY > 10) {
//       header.classList.add("active");
//     } else if (window.scrollY <= 10) {
//       header.classList.remove("active");
//     }
//   } else {
//     header.classList.toogle("active");
//   }
// }

function setFiltersMobile() {
  filtersOpen.style.top = header.clientHeight + "px";
  filtersOpen.style.height = `calc(100vh - ${header.clientHeight}px)`;
}

function setPaddingMenu() {
  if (menu) {
    menu.style.paddingTop = header.clientHeight + 100 + "px";
    console.log(menu.style)
  }
}

console.log(menu);

setPaddingMenu();
setBar();
setFiltersMobile();
window.addEventListener("resize", setBar);
window.addEventListener("resize", setPaddingMenu);
// selectedFilters.addEventListener("resize", setBar);
window.addEventListener("setFiltersMobile", setBar);
// window.addEventListener("scroll", setHeader);
