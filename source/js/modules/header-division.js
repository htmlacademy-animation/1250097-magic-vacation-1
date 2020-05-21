export const titles = document.querySelectorAll(`.intro__title, .slider__item-title, .prizes__title, .rules__title, .game__title, .intro__date`); // тайтлы которые должны иметь эфект
export function headerDivision() {
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
  titles.forEach((title) => {
    if (area.contains(title)) { // 2. найти в ней анимируемый тайтл
      title.classList.add(`active`);
    } else {
      title.classList.remove(`active`);
    }
  });
}
export function dissectText(title, container) {
  container.textContent = ``;
  const titleArray = title.split(` `);
  for (let i = 0; i < titleArray.length; i++) {
    let leters = [];
    const span = document.createElement(`span`);
    for (let j = 0; j < titleArray[i].length; j++) {
      const spanLeter = document.createElement(`span`);
      spanLeter.style.transition = `all 0.3s cubic-bezier(0.16, 1, 0.3, 1) ${getRandomArbitrary(200, 500)}ms`;
      spanLeter.textContent = `${titleArray[i][j]}`;
      leters.push(spanLeter);
    }
    leters.forEach((thisSpan) => {
      span.append(thisSpan);
    });
    container.append(span);
  }
}
function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
const ruleText = document.querySelector(`.rules__lead p`);
const rulesList = document.querySelectorAll(`.rules__item`);

ruleText.addEventListener(`animationend`, function () {
  setTimeout(
      function () {
        addAnimationBlock(rulesList[0]);
      }, 200
  );
});
for (let i = 0; i < rulesList.length; i++) {
  if (i >= 0 && i < (rulesList.length - 1)) {
    rulesList[i].querySelector(`p`).addEventListener(`animationend`, function () {
      setTimeout(
          function () {
            addAnimationBlock(rulesList[i + 1]);
          }
          , 100
      );
    });
  }
  if (i === rulesList.length - 1) {
    rulesList[i].querySelector(`p`).addEventListener(`animationend`, function () {
      const ruleLink = document.querySelector(`.rules__link`);
      setTimeout(
          function () {
            addAnimationBlock(ruleLink);
          }
          , 200
      );
    });
  }
}

function addAnimationBlock(element) {
  element.classList.add(`active`);
}
// алгоритм
// 1. определить видимую секцию
// 2. найти в ней анимируемый тайтл
// 3. расчленить на буквы
// 4. засунуть буквы в спан
// 5. каждому спану задать рандомную задержку
// 6. привязаться к событию скрола (full-page-scroll.js)
