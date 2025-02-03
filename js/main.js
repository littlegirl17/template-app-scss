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

//------------------------------
function showModalProduct() {
  const modalProduct = document.getElementById("modalProduct");
  const overlay = document.getElementById("overlay_btn");
  modalProduct.classList.add("show"); // Thêm lớp 'show' để modal hiển thị
  modalProduct.style.pointerEvents = "auto";
  overlay.classList.add("show");

  const closeModal = document.getElementById("close_modal");
  closeModal.onclick = function () {
    modalProduct.classList.remove("show");
    modalProduct.style.pointerEvents = "none";
    overlay.classList.remove("show");
  };

  overlay.onclick = function () {
    closeModal.click();
  };
}

document.addEventListener("DOMContentLoaded", () => {
  let quantity = 1;
  const pricePerUnit = 1900000; // Giá mỗi sản phẩm
  function updateTotalPrice(quantity) {
    const total = pricePerUnit * quantity;
    document.getElementById("total_price").textContent =
      total.toLocaleString("vi-VN") + "đ"; // Định dạng tiền tệ
  }

  const decreaseButton = document.querySelector(".decrease");
  const increaseButton = document.querySelector(".increase");
  const quantityInput = document.querySelector(".quantity_model");

  decreaseButton.addEventListener("click", () => {
    if (quantity > 1) {
      quantity--;
      quantityInput.value = quantity;
      updateTotalPrice(quantity);
    }
  });

  increaseButton.addEventListener("click", () => {
    quantity++;
    quantityInput.value = quantity;
    updateTotalPrice(quantity);
  });
});
