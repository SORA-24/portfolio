document.addEventListener("DOMContentLoaded", function () {
  const hero = new HeroSlider();
  // hero.start(delay, 2000);
  // setTimeout(() => {
  //   hero.stop();
  // }, 100000);
});
class HeroSlider {
  constructor(el) {
    this.el = el;
    this.swiper = this.__initSwiper();
  }
  __initSwiper() {
    return new Swiper(".swiper-container", {
      // 以下にオプションを設定
      loop: true, //最後に達したら先頭に戻る
      // grabCursor: true,
      effect: "coverflow",
      centeredSlides: true,
      slidesPerView: 1,
      speed: 1000,
      // レスポンシブ
      breakpoints: {
        1024: {
          slidesPerView: 2,
        },
      },
      autoplay: {
        delay: 4000,
        disableOnInteractive: false,
      },
    });
  }
  // start(options = {}) {
  //   options = Object.assign(
  //     {
  //       delay: 2000,
  //       disableOnInteractive: false,
  //     },
  //     options
  //   );
  //   this.swiper.params.autoplay = options;
  //   this.swiper.autoplay.start();
  // }
  // stop() {
  //   this.swiper.autoplay.stop();
  // }
}
