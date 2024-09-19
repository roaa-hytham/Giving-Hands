document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navList = document.querySelector(".nav-list ul");

  hamburger.addEventListener("click", function () {
    navList.classList.toggle("active");
  });
});
