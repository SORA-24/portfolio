// const link_btn = document.querySelectorAll(".link_btn");
const hum_btn = document.querySelector(".hum_btn");
const menu = document.querySelector(".menu");

$(function () {
  $('a[href^="#"]').click(function () {
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    $(".menu").toggleClass("is_open");
    var position = target.offset().top - 96;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});

hum_btn.addEventListener("click", () => {
  toggle_menu();
});
// link_btn.forEach((element) => {
//   element.addEventListener("click", () => {
//     toggle_menu();
//   });
// });

function toggle_menu() {
  menu.classList.toggle("is_open");
}
