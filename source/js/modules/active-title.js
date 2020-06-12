export const titles = document.querySelectorAll(`[data-text]`);
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


const ruleText = document.querySelector(`.rules__lead p`);
const rulesList = document.querySelectorAll(`.rules__item`);

ruleText.addEventListener(`animationend`, function () {
  setTimeout(
      function () {
        addAnimationBlock(rulesList[0]);
      }, 200
  );
});

for (let i = 0; i < rulesList.length - 1; i++) {
  rulesList[i].querySelector(`p`).addEventListener(`animationend`, function () {
    setTimeout(
        function () {
          addAnimationBlock(rulesList[i + 1]);
        }
        , 100
    );
  });
}
rulesList[rulesList.length - 1].querySelector(`p`).addEventListener(`animationend`, function () {
  const ruleLink = document.querySelector(`.rules__link`);
  setTimeout(
      function () {
        addAnimationBlock(ruleLink);
      }, 200
  );
});

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
