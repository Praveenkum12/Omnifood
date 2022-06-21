const normal = document.querySelector(".header");
normal.classList.remove("nav-open");

const menu = document.querySelector(".nav-1");
const close = document.querySelector(".nav-2");
const main = document.querySelector(".main-nav");

menu.addEventListener("click", function () {
  normal.classList.add("nav-open");
  menu.style.display = "none";
  close.style.display = "block";

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      callMe();
    }
  });
});

const callMe = function () {
  normal.classList.remove("nav-open");
  menu.style.display = "block";
  close.style.display = "none";
};

close.addEventListener("click", callMe);
