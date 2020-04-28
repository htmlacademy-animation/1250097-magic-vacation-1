export default () => {
  window.addEventListener(`load`, addBodyClass);
  function addBodyClass() {
    document.querySelector(`body`).classList.add(`pageLoad`);
  }
};
