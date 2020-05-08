import {dissectText, titles} from "./header-division";

export default () => {
  window.addEventListener(`load`, addBodyClass);
  function addBodyClass() {
    document.querySelector(`body`).classList.add(`pageLoad`);
    titles.forEach((title) => {
      dissectText(title.dataset.text, title);
    });
  }
};
