import {titles} from "./active-title";
import {TitleAnimation} from "./title-animation";

export default () => {
  window.addEventListener(`load`, addBodyClass);
  function addBodyClass() {
    document.querySelector(`body`).classList.add(`pageLoad`);
    const animate = new TitleAnimation(titles);
    animate.init();
  }

  document.querySelector(`.slider__item-text`).addEventListener(`animationend`, function () {
    document.querySelector(`.slider__control--prev`).style.animation = `sliderControlAnimation 0.5s forwards`;
    document.querySelector(`.slider__control--next`).style.animation = `sliderControlAnimation 0.5s forwards`;
    document.querySelector(`.slider__pagination`).style.animation = `fadeInSpan  0.5s forwards`;
  });
};
