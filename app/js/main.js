/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index-page.js":
/*!******************************!*\
  !*** ./src/js/index-page.js ***!
  \******************************/
/***/ (() => {

const start_texts = [
  {
    title: "Константин Станиславский",
    text: "Режиссер с нестандартным подходом к поиску тем. Интеллектуал с развитой интуицией. Широкий кругозор, любознательность и настойчивость помогают решать самые сложные задачи и выпутываться из всевозможных передряг. Не лишен актерских качеств."
  },
  {
    title: "Владимир Гиляровский",
    text: 'Журналист, знакомый с различными сторонами человеческой жизни, включая самые неприглядные. Обширный круг знакомств в самых разных сферах, умение находить общий язык практически с любым человеком — от бродяги и преступника до аристократа, — а также доскональное знание московских трущоб и их обитателей не раз выручали его в сложных ситуациях.'
  },
  {
    title: 'Княжна',
    text: 'Обитательница Хитровки, воровка. Утверждает, что она — потомок аристократического рода, но доказать это невозможно, хоть она образованна и даже говорит по-французски. Несмотря на суровую жизнь, отличается благородством. Находчива.'
  },
]


window.addEventListener('load', function () {
  const persons = document.querySelectorAll('.main_hero-section img')
  if (persons.length > 0)
    for (let i = 0; i < persons.length; i++) {
      if('ontouchstart' in window || navigator.msMaxTouchPoints){
        persons[i].onclick = function () {
          const dialog = document.querySelector('.hero_description')
          dialog.style.display = 'block'
          dialog.style.left = '50%'
          dialog.style.transform = 'translate(-50%, 0)'
          const title = document.querySelector('.hero_description .hero-title')
          const text = document.querySelector('.hero_description .hero-subtitle')
          const mapLink = document.querySelector('.main_link')
          title.innerHTML = start_texts[i].title
          text.innerHTML = start_texts[i].text
          localStorage.setItem('selectedHero', persons[i].id);
          mapLink.href = './map.html'
          mapLink.querySelector('.select-hero').innerText = '«Выбрать героя»'
        }
      } else {
        persons[i].onmouseover = function () {
          const dialog = document.querySelector('.hero_description')
          dialog.style.display = 'block'
          const dialogRect = dialog.getBoundingClientRect()
          const personRect = persons[i].getBoundingClientRect()
          const bodyRect = document.body.getBoundingClientRect()
          dialog.style.left = (dialogRect.width + personRect.x + (personRect.width / 2)) >= bodyRect.width ? `${bodyRect.width - dialogRect.width}px` : `${personRect.x + (personRect.width / 2)}px`
          const title = document.querySelector('.hero_description .hero-title')
          const text = document.querySelector('.hero_description .hero-subtitle')
          title.innerHTML = start_texts[i].title
          text.innerHTML = start_texts[i].text
        }

        persons[i].onclick = function () {
          localStorage.setItem('selectedHero', persons[i].id);
          window.open('map.html', '_self')
        }
      }
    }
});


/***/ }),

/***/ "./src/js/map-links-listener.js":
/*!**************************************!*\
  !*** ./src/js/map-links-listener.js ***!
  \**************************************/
/***/ (() => {

window.addEventListener('click', function (e) {
  const link = e.target.closest('.map_link')
  if (!link) return
  let num;

  switch (location.pathname.split('/')[1]?.replace('.html', '')) {
    case 'kvartira':
      num = 1;
      break;
    case 'traktir':
      num = 2;
      break;
    case 'police':
      num = 3;
      break;
    case 'antikvar':
      num = 4;
      break;
    case 'nochlejka':
      num = 5;
      break;
  }

  let maxLoc = Cookies.get('location')

  if (!maxLoc) maxLoc = 0
  if (num > maxLoc) Cookies.set('location', num)
})


window.addEventListener('click', function (e) {
  const link = e.target.closest('.restart-link')
  if (!link) return
  Cookies.set('location', 0)
  localStorage.removeItem('selectedHero')
})


/***/ }),

/***/ "./src/js/map-page.js":
/*!****************************!*\
  !*** ./src/js/map-page.js ***!
  \****************************/
/***/ (() => {

window.onload = function () {
  if (location.pathname.includes('map')) {
    initMap()
  }
}

function initMap() {
  let maxLoc = Cookies.get('location')
  if (!maxLoc) maxLoc = 0
  const locations = document.querySelectorAll('.point-item a')
  locations[maxLoc].classList.add('current-active')
  if (locations?.length > 0) {
    for (let i = 0; i < locations.length; i++) {
      const loc = locations[i];
      if (i > maxLoc) {
        loc.removeAttribute('href')
      } else {
        loc.classList.add('active')
      }
    }
  }
}


/***/ }),

/***/ "./src/js/preloader.js":
/*!*****************************!*\
  !*** ./src/js/preloader.js ***!
  \*****************************/
/***/ (() => {

window.addEventListener('load', function () {
  const preloader = document.querySelector('.preloader_wrapper');

  if (preloader) {
    preloader.style.display = 'none';
  }
});


/***/ }),

/***/ "./src/js/scripts.js":
/*!***************************!*\
  !*** ./src/js/scripts.js ***!
  \***************************/
/***/ (() => {


const url = 'https://hitrovka.woman.ru/get_data/';

const antikvarTitle = document.querySelector('.antikvar_title');
const antikvarSubTitle = document.querySelector('.antikvar_subtitle');
const antikvarAvatar = document.querySelector('.antikvar-avatar');
const radjiTitle = document.querySelector('.radji_title');
const radjiSubTitle = document.querySelector('.radji_subtitle');
const tractiriTitle = document.querySelector('.traktir_title');
const tractirSubTitle = document.querySelector('.traktir_subtitle');
const policeTitle = document.querySelector('.police_title');
const policeSubTitle = document.querySelector('.police_subtitle');
const nochlejkaTitle = document.querySelector('.nochlejka_title');
const nochlejkaSubTitle = document.querySelector('.nochlejka_subtitle');
const nochlejkaAvatar = document.querySelector('.nochlejka-avatar');

const radjiBlock = document.querySelector('.radji_dialog');
const radjiItem = document.querySelectorAll('.radji-item');


const kru = document.querySelector('.kru');
const porech = document.querySelector('.porech');
const woman = document.querySelector('.woman');
const kruDescr = document.querySelector('.kru-descr');
const porechDescr = document.querySelector('.porech-descr');
const womanDescr = document.querySelector('.woman-descr');


const changeDialogTraktir = () => {
  const traktirDialog = document.querySelector('.tractir_dialog');
  const traktirBlock = document.querySelector('.tractir_block');
  const texts = ["- Что это? Портсигар? Ну дела! А ведь про него давеча спрашивал городовой! Пропади моя душа, если я вру! Накинь пару монет, расскажу, как дело было!",
    "- Заходит, значит, городовой… Ну, сброд, значит, с лавок шасть! А он им только: «Цыц, люд арестантский, не по вашу я душу!» А сам, значит, ко мне! И рисунок протягивает. А на нем… Ентот портсигар! Только еще какие-то буквы вот тут намалеваны… Какие? А я почем знаю? Мы университетов не кончали, звиняйте!"];

  let currentIndex = 1;

  function changeText() {
    traktirDialog.textContent = texts[currentIndex];

    if (currentIndex === texts.length - 1) {
      traktirDialog.removeEventListener('click', changeText);
      traktirDialog.innerHTML = `${texts[currentIndex]}
            <a href="./map.html" class="map_link">
                <p class="remove_map">«Продолжить поиски»</p>
            </a>`
    } else {
      currentIndex = (currentIndex + 1) % texts.length;
    }
  }

  if (traktirDialog) {
    traktirBlock.addEventListener('click', changeText);
    traktirBlock.addEventListener('tap', changeText);
  }
}

changeDialogTraktir()

const changeDialogAntikvar = () => {
  const antikvarDialog = document.querySelector('.antikvar_dialog');
  const antikvarBlock = document.querySelector('.antikvar_block');
  const texts = ["- Подскажите, любезнейший, что вы знаете про вот этот [ПРЕДМЕТ]?",
    "- Знать-то я знаю много, но у нас в районе действует правило, кто много говорит, долго не живет. К тому же информация стоит денег…",
    "- Ну хорошо. Вот вам серебряный рубль. Этого хватит?",
    "- Этого хватит, чтобы меня похоронить, если я назову тебе имя…",
    "- А если я дам золотой?",
    "- Давай так. Имя я не назову, но скажу, где искать. А уж пойдешь ты туда или нет, решать тебе… Но я бы не советовал туда соваться. Плохое это место!",
    "- Вот деньги!"
  ];

  let currentIndex = 1;

  function changeText() {
    if(currentIndex % 2 === 0){
      if (selectedHero === 'kru') {
        antikvarAvatar.src = kruAvatar;
        antikvarAvatar.alt = 'hero';
      } else if (selectedHero === 'porech') {
        antikvarAvatar.src = porechAvatar;
        antikvarAvatar.alt = 'hero';
      } else if (selectedHero === 'woman') {
        antikvarAvatar.src = womanAvatar;
        antikvarAvatar.alt = 'hero';
      }
    } else {
      antikvarAvatar.src = '/img/antikvar/Ellipse 7.webp';
      antikvarAvatar.alt = 'Антиквар';
    }

    antikvarDialog.textContent = texts[currentIndex];

    if (currentIndex === texts.length - 1) {
      antikvarDialog.removeEventListener('click', changeText);
      antikvarDialog.innerHTML = `${texts[currentIndex]}
            <a href="./map.html" class="map_link">
                <p class="remove_map">«Продолжить поиски»</p>
            </a>`
    } else {
      currentIndex = (currentIndex + 1) % texts.length;
      antikvarDialog.innerHTML += `<a class="map_link"><p class="remove_map">«Продолжить»</p></a>`
    }
  }

  if (antikvarDialog) {
    antikvarDialog.innerHTML += `<a class="map_link"><p class="remove_map">«Продолжить»</p></a>`
    antikvarBlock.addEventListener('click', changeText);
    antikvarBlock.addEventListener('tap', changeText);
  }
}

changeDialogAntikvar()

const changeDialogNochlejka = () => {
  const nochlejkaDialog = document.querySelector('.nochlejka_dialog');
  const nochlejkaBlock = document.querySelector('.nochlejka_block');
  const texts = ["Странно, это место выглядит давно заброшенным… Кажется, мы шли по ложному следу. Придется начинать расследование сначала!",
    "Кто же убил Раджу? Все ответы вы найдете в фильме «Хитровка. Знак четырех». В кино уже с 18 мая.\n\nСмотреть трейлер"
  ];

  let currentIndex = 1;

  function changeText() {
    nochlejkaDialog.textContent = texts[currentIndex];
    if(currentIndex + 1 === texts.length) {
      document.querySelector('.card_dialog-text-container .ticket-link').style.display = 'block'
      document.querySelector('.card_dialog-text-container .restart-link').style.display = 'block'
    }

    if (currentIndex === texts.length - 1) {
      nochlejkaDialog.removeEventListener('click', changeText);
      nochlejkaDialog.innerHTML = `${texts[currentIndex]}`
    } else {
      currentIndex = (currentIndex + 1) % texts.length;
    }
  }

  if (nochlejkaDialog) {
    nochlejkaDialog.innerHTML += '<a class="map_link"><p class="remove_map">«Продолжить»</p></a>'
    nochlejkaBlock.addEventListener('click', changeText);
    nochlejkaBlock.addEventListener('tap', changeText);
  }
}

changeDialogNochlejka()


// localStorage.clear()
const selectedHero = localStorage.getItem('selectedHero')

const kruAvatar = './img/kruEclips.webp'
const porechAvatar = './img/porech6.webp'
const womanAvatar = '../img/wonam.webp'

const addCardTextRadji = (nameTitle, nameSubtitle, numberArrName, numberArrDescr) => {
  if (nameTitle) {
    nameTitle.textContent = numberArrName
    nameSubtitle.textContent = numberArrDescr
  }
}
const addCardTextAntikvar = (nameTitle, nameSubtitle, numberArrName, numberArrDescr, cardDialogAvatar) => {
  if (nameTitle) {
    if (selectedHero === 'kru') {
      cardDialogAvatar.src = kruAvatar;
      cardDialogAvatar.alt = 'hero';
    } else if (selectedHero === 'porech') {
      cardDialogAvatar.src = porechAvatar;
      cardDialogAvatar.alt = 'hero';
    } else if (selectedHero === 'woman') {
      cardDialogAvatar.src = womanAvatar;
      cardDialogAvatar.alt = 'hero';
    }
    nameTitle.textContent = numberArrName
    nameSubtitle.textContent = numberArrDescr
  }
}
const addCardTextTractir = (nameTitle, nameSubtitle, numberArrName, numberArrDescr) => {
  if (nameTitle) {
    nameTitle.textContent = numberArrName
    nameSubtitle.textContent = numberArrDescr
  }
}
const addCardTextPolice = (nameTitle, nameSubtitle, numberArrName, numberArrDescr) => {
  if (nameTitle) {
    nameTitle.textContent = numberArrName
    nameSubtitle.textContent = numberArrDescr
  }
}
const addCardTextNochlejka = (nameTitle, nameSubtitle, numberArrName, numberArrDescr, cardDialogAvatar) => {
  if (nameTitle) {
    if (selectedHero === 'kru') {
      cardDialogAvatar.src = kruAvatar;
      cardDialogAvatar.alt = 'hero';
    } else if (selectedHero === 'porech') {
      cardDialogAvatar.src = porechAvatar;
      cardDialogAvatar.alt = 'hero';
    } else if (selectedHero === 'woman') {
      cardDialogAvatar.src = womanAvatar;
      cardDialogAvatar.alt = 'hero';
    }
    nameTitle.textContent = numberArrName
    nameSubtitle.textContent = numberArrDescr
  }
}


fetch(url)
  .then(response => response.json())
  .then(resp => {
    const location = resp.location

    addCardTextRadji(radjiTitle, radjiSubTitle, location[0].name, location[0].desc)
    addCardTextTractir(tractiriTitle, tractirSubTitle, location[1].name, location[1].desc)
    addCardTextPolice(policeTitle, policeSubTitle, location[2].name, location[2].desc)
    addCardTextAntikvar(antikvarTitle, antikvarSubTitle, location[3].name, location[3].desc, antikvarAvatar);
    addCardTextNochlejka(nochlejkaTitle, nochlejkaSubTitle, location[4].name, location[4].desc, nochlejkaAvatar)


  })
  .catch(error => console.log('Error', error))


radjiItem.forEach(item => {
  if('ontouchstart' in window || navigator.msMaxTouchPoints){
    item.onclick = function (){
      item.classList.add('found')
      radjiBlock.style.display = 'flex'
    }
  } else {
    item.onmouseover = function (){
      item.classList.add('found')
      radjiBlock.style.display = 'flex'
    }
  }
})


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _preloader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preloader */ "./src/js/preloader.js");
/* harmony import */ var _preloader__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_preloader__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts */ "./src/js/scripts.js");
/* harmony import */ var _scripts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-page */ "./src/js/index-page.js");
/* harmony import */ var _index_page__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_page__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _map_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map-page */ "./src/js/map-page.js");
/* harmony import */ var _map_page__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_map_page__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _map_links_listener__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map-links-listener */ "./src/js/map-links-listener.js");
/* harmony import */ var _map_links_listener__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_map_links_listener__WEBPACK_IMPORTED_MODULE_4__);







if (location.pathname.replace('/', '') !== '' && !localStorage.getItem('selectedHero')) {
  location.replace(location.origin)
}

if (location.pathname.includes('nochlejka')) {
  Cookies.set('location', 0)
}

})();

/******/ })()
;
//# sourceMappingURL=main.js.map