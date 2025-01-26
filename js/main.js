const headerSearch = document.querySelector(".header_fixed_mobile");
window.addEventListener("scroll", function () {
  if (window.scrollY > 90) {
    headerSearch.classList.add("fixed");
  } else {
    headerSearch.classList.remove("fixed");
  }
});
