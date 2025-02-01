const headerSearch = document.querySelector(".header_fixed_mobile");
window.addEventListener("scroll", function () {
  if (window.scrollY > 90) {
    headerSearch.classList.add("fixed");
  } else {
    headerSearch.classList.remove("fixed");
  }
});

//-------------------swiper

const swiper_1 = new Swiper(".banner_mobile", {
  loop: true, // Vòng lặp
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 800,
});

const swiperProduct = new Swiper(".product_box_mobile", {
  slidesPerView: 2.5,
  spaceBetween: 10,
  loop: true,
  navigation: false,
  pagination: false,
  grabCursor: true,
  centeredSlides: false,
});
