// document.addEventListener("DOMContentLoaded", function () {
//   const ta = new TextAnimation(".contents_title");
//   ta.animate();
// });

const els = document.querySelectorAll(".container");

const cb = function (entries, observer) {
  // 処理を書く
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // 入った
      entry.target.classList.add("inview");
    } else {
      // でた
      entry.target.classList.remove("inview");
    }
  });
};

const options = {
  root: null,
  // rootMargin 〇〇から００px入ったときに発動する
  rootMargin: "-100px 0px 0px 0px",
  // // threshold 支点を指定 0が一番下　1が一番上
  // // [0 , 0.5 ,1] 場所ごとにコールバックが呼ばれる
  // threshold: 0,
};
const io = new IntersectionObserver(cb);
els.forEach((el) => {
  io.observe(el);
});
