const searchForm = document.querySelector(".search-form");
const CartItem = document.querySelector(".cart-items-container");
const navbar = document.querySelector(".navbar");
/*buttons*/
const searchBtn = document.querySelector("#search-btn");
const CartBtn = document.querySelector("#cart-btn");
const menuBtn = document.querySelector("#menu-btn");

searchBtn.addEventListener("click", function () {
  searchForm.classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(searchBtn) &&
      !e.composedPath().includes(searchForm)
    ) {
      searchForm.classList.remove("active");
    }
  });
});

CartBtn.addEventListener("click", function () {
  CartItem.classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(CartBtn) &&
      !e.composedPath().includes(CartItem)
    ) {
      CartItem.classList.remove("active");
    }
  });
});

menuBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(menuBtn) &&
      !e.composedPath().includes(navbar)
    ) {
      navbar.classList.remove("active");
    }
  });
});
