export class TitleAnimation {
  constructor(titles) {
    this.titles = titles;
    this.screenSection = document.querySelectorAll(`.screen`);
  }
  init() {
    this.titles.forEach((title) => {
      this.dissectText(title.dataset.text, title);
    });
  }
  dissectText(title, container) {
    container.textContent = ``;
    const titleArray = title.split(` `);

    for (let i = 0; i < titleArray.length; i++) {
      let leters = [];
      const span = document.createElement(`span`);
      span.classList.add(`first-span`);
      for (let j = 0; j < titleArray[i].length; j++) {
        const spanLeter = document.createElement(`span`);
        spanLeter.classList.add(`span-leter`);
        spanLeter.style.transition = `all 0.3s cubic-bezier(0.16, 1, 0.3, 1) ${this.getRandomArbitrary(200, 500)}ms`;
        spanLeter.textContent = `${titleArray[i][j]}`;
        leters.push(spanLeter);
      }
      leters.forEach((thisSpan) => {
        span.append(thisSpan);
      });
      container.append(span);
    }
  }
  getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
}
