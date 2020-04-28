export default function headerDivision() {
  const screenSections = document.querySelectorAll(`.screen`); // все области
  getvisibleArea(screenSections);
}


function getvisibleArea(areas) {
  areas.forEach((section) => {
    if (!section.classList.contains(`screen--hidden`)) { // 1. определить видимую секцию
      getAnimateTitle(section);
    }
  });
}

function getAnimateTitle(area) {
  const titles = document.querySelectorAll(`.intro__title, .slider__item-title, .prizes__title, .rules__title, .game__title`); // тайтлы которые должны иметь эфект
  titles.forEach((title) => {
    if (area.contains(title)) { // 2. найти в ней анимируемый тайтл
      dissectText(title.dataset.text, title);
    }
  });
}

function dissectText(title, container) {

  const letters = [];
  for (let i = 0; i < title.length; i++) { // 3. расчленить на буквы
    letters.push(`<span style="animation-delay:${getRandomArbitrary(100, 1000)}ms">${title[i]}</span>`);
  }
  container.textContent = ``;
  letters.forEach((span) => {
    container.insertAdjacentHTML(`beforeend`, span);
  });
}

function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

window.addEventListener(`scroll`, headerDivision);
// алгоритм
// 1. определить видимую секцию
// 2. найти в ней анимируемый тайтл
// 3. расчленить на буквы
// 4. засунуть буквы в спан
// 5. каждому спану задать рандомную задержку
// 6. привязаться к событию скрола (проверка: если видимая секция имеет тайтл который нужно анимировать и он не расчленен (спан) то повторить алгоритм)
