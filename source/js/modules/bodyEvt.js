import {titles} from "./active-title";
import {TitleAnimation} from "./title-animation";

export default () => {
  window.addEventListener(`load`, addBodyClass);
  function addBodyClass() {
    document.querySelector(`body`).classList.add(`pageLoad`);
    const animate = new TitleAnimation(titles);
    animate.init();
  }
};
