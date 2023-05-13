/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (() => {

var _urlSegment;
const start_texts = [/*01*/{
  title: "Константин Станиславский",
  text: "Режиссер с нестандартным подходом к поиску тем. Интеллектуал с развитой интуицией. Широкий кругозор, любознательность и настойчивость помогают решать самые сложные задачи и выпутываться из всевозможных передряг. Не лишен актерских качеств."
}, /*02*/{
  title: "Владимир Гиляровский",
  text: 'Журналист, знакомый с различными сторонами человеческой жизни, включая самые неприглядные. Обширный круг знакомств в самых разных сферах, умение находить общий язык практически с любым человеком — от бродяги и преступника до аристократа, — а также доскональное знание московских трущоб и их обитателей не раз выручали его в сложных ситуациях.'
}, /*03*/{
  title: 'Княжна',
  text: 'Обитательница Хитровки, воровка. Утверждает, что она — потомок аристократического рода, но доказать это невозможно, хоть она образованна и даже говорит по-французски. Несмотря на суровую жизнь, отличается благородством. Находчива.'
}];
function urlSegment(num) {
  return location.pathname.split('/')[num];
}
const curUrl = (_urlSegment = urlSegment(1)) === null || _urlSegment === void 0 ? void 0 : _urlSegment.replace('.html', '');
if (curUrl === 'nochlejka') Cookies.set('location', 0);

//index
function setStartEvents() {
  const persons = document.querySelectorAll('.main_hero-section img');
  console.log(persons);
  if (persons.length) for (let i = 0; i < persons.length; i++) {
    persons[i].onmouseover = function (e) {
      const title = document.querySelector('.hero_description .hero-title');
      const text = document.querySelector('.hero_description .hero-subtitle');
      title.innerHTML = start_texts[i].title;
      text.innerHTML = start_texts[i].text;
    };
  }
}
if (curUrl === '') setStartEvents();

//map
function initMap() {
  let maxLoc = Cookies.get('location');
  if (!maxLoc) maxLoc = 0;
  const locations = document.querySelectorAll('.point-item a');
  for (let i = 0; i < locations.length; i++) {
    const loc = locations[i];
    if (i > maxLoc) {
      loc.removeAttribute('href');
    } else {
      loc.classList.add('active');
    }
  }
}
if (curUrl.includes('map')) initMap();

//map link
function setMapLink() {
  window.addEventListener('click', function (e) {
    const link = e.target.closest('.map_link');
    if (!link) return;
    //link.removeAttribute('href')
    let num;
    switch (curUrl) {
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
    let maxLoc = Cookies.get('location');
    if (!maxLoc) maxLoc = 0;
    if (num > maxLoc) Cookies.set('location', num);
  });
}
setMapLink();

/***/ }),

/***/ "./src/js/cookies.js":
/*!***************************!*\
  !*** ./src/js/cookies.js ***!
  \***************************/
/***/ (function(module) {

/*! js-cookie v3.0.5 | MIT */
!function (e, t) {
   true ? module.exports = t() : 0;
}(this, function () {
  "use strict";

  function e(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var o in n) e[o] = n[o];
    }
    return e;
  }
  var t = function t(n, o) {
    function r(t, r, i) {
      if ("undefined" != typeof document) {
        "number" == typeof (i = e({}, o, i)).expires && (i.expires = new Date(Date.now() + 864e5 * i.expires)), i.expires && (i.expires = i.expires.toUTCString()), t = encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
        var c = "";
        for (var u in i) i[u] && (c += "; " + u, !0 !== i[u] && (c += "=" + i[u].split(";")[0]));
        return document.cookie = t + "=" + n.write(r, t) + c;
      }
    }
    return Object.create({
      set: r,
      get: function (e) {
        if ("undefined" != typeof document && (!arguments.length || e)) {
          for (var t = document.cookie ? document.cookie.split("; ") : [], o = {}, r = 0; r < t.length; r++) {
            var i = t[r].split("="),
              c = i.slice(1).join("=");
            try {
              var u = decodeURIComponent(i[0]);
              if (o[u] = n.read(c, u), e === u) break;
            } catch (e) {}
          }
          return e ? o[e] : o;
        }
      },
      remove: function (t, n) {
        r(t, "", e({}, n, {
          expires: -1
        }));
      },
      withAttributes: function (n) {
        return t(this.converter, e({}, this.attributes, n));
      },
      withConverter: function (n) {
        return t(e({}, this.converter, n), this.attributes);
      }
    }, {
      attributes: {
        value: Object.freeze(o)
      },
      converter: {
        value: Object.freeze(n)
      }
    });
  }({
    read: function (e) {
      return '"' === e[0] && (e = e.slice(1, -1)), e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
    },
    write: function (e) {
      return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent);
    }
  }, {
    path: "/"
  });
  return t;
});

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
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
  const texts = ["- Что это? Портсигар? Ну дела! А ведь про него давеча спрашивал городовой! Пропади моя душа, если я вру! Накинь пару монет, расскажу, как дело было!", "- Заходит, значит, городовой… Ну, сброд, значит, с лавок шасть! А он им только: «Цыц, люд арестантский, не по вашу я душу!» А сам, значит, ко мне! И рисунок протягивает. А на нем… Ентот портсигар! Только еще какие-то буквы вот тут намалеваны… Какие? А я почем знаю? Мы университетов не кончали, звиняйте!"];
  let currentIndex = 1;
  function changeText() {
    traktirDialog.textContent = texts[currentIndex];
    if (currentIndex === texts.length - 1) {
      traktirDialog.removeEventListener('click', changeText);
      traktirDialog.innerHTML = `${texts[currentIndex]} 
            <a href="./map.html" class="map_link">
                <p class="remove_map">«Вернуться на карту»</p>
            </a>`;
    } else {
      currentIndex = (currentIndex + 1) % texts.length;
    }
  }
  if (traktirDialog) {
    traktirBlock.addEventListener('click', changeText);
    traktirBlock.addEventListener('tap', changeText);
  } else {
    null;
  }
};
changeDialogTraktir();
const changeDialogAntikvar = () => {
  const antikvarDialog = document.querySelector('.antikvar_dialog');
  const antikvarBlock = document.querySelector('.antikvar_block');
  const texts = ["- Подскажите, любезнейший, что вы знаете про вот этот [ПРЕДМЕТ]?", "- Знать-то я знаю много, но у нас в районе действует правило, кто много говорит, долго не живет. К тому же информация стоит денег…", "- Ну хорошо. Вот вам серебряный рубль. Этого хватит?", "- Этого хватит, чтобы меня похоронить, если я назову тебе имя…", "- А если я дам золотой?", "- Давай так. Имя я не назову, но скажу, где искать. А уж пойдешь ты туда или нет, решать тебе… Но я бы не советовал туда соваться. Плохое это место!", "- Вот деньги!"];
  let currentIndex = 1;
  function changeText() {
    antikvarDialog.textContent = texts[currentIndex];
    if (currentIndex === texts.length - 1) {
      antikvarDialog.removeEventListener('click', changeText);
      antikvarDialog.innerHTML = `${texts[currentIndex]} 
            <a href="./map.html" class="map_link">
                <p class="remove_map">«Вернуться на карту»</p>
            </a>`;
    } else {
      currentIndex = (currentIndex + 1) % texts.length;
    }
  }
  if (antikvarDialog) {
    antikvarBlock.addEventListener('click', changeText);
    antikvarBlock.addEventListener('tap', changeText);
  } else {
    null;
  }
};
changeDialogAntikvar();
const changeDialogNochlejka = () => {
  const nochlejkaDialog = document.querySelector('.nochlejka_dialog');
  const nochlejkaBlock = document.querySelector('.nochlejka_block');
  const nochlejkaVideoblock = document.querySelector('.card_videoblock');
  const texts = ["Странно, это место выглядит давно заброшенным… Кажется, мы шли по ложному следу. Придется начинать расследование сначала!", "Кто же убил Раджу? Все ответы вы найдете в фильме «Хитровка. Знак четырех». В кино уже с 18 мая.\n\nСмотреть трейлер"];
  let currentIndex = 1;
  function changeText() {
    nochlejkaDialog.textContent = texts[currentIndex];
    if (currentIndex === texts.length - 1) {
      nochlejkaDialog.removeEventListener('click', changeText);
      nochlejkaDialog.innerHTML = `${texts[currentIndex]}`;
    } else {
      currentIndex = (currentIndex + 1) % texts.length;
    }
  }
  if (nochlejkaDialog) {
    nochlejkaBlock.addEventListener('click', changeText);
    nochlejkaBlock.addEventListener('tap', changeText);
  } else {
    null;
  }
};
changeDialogNochlejka();
function selectHero(heroId) {
  localStorage.setItem('selectedHero', heroId);
}
if (kru && porech && woman) {
  kru.addEventListener('click', function () {
    selectHero('kru');
  });
  porech.addEventListener('click', function () {
    selectHero('porech');
  });
  woman.addEventListener('click', function () {
    selectHero('woman');
  });
}
// localStorage.clear()
const selectedHero = localStorage.getItem('selectedHero');
const kruAvatar = './img/kruEclips.webp';
const porechAvatar = './img/porech6.webp';
const womanAvatar = '../img/wonam.webp';
const addCardTextRadji = (nameTitle, nameSubtitle, numberArrName, numberArrDescr) => {
  if (nameTitle) {
    nameTitle.textContent = numberArrName;
    nameSubtitle.textContent = numberArrDescr;
  } else {
    null;
  }
};
const addCardTextAntikvar = (nameTitle, nameSubtitle, numberArrName, numberArrDescr, cardDialogAvatar) => {
  if (nameTitle) {
    if (selectedHero === 'kru') {
      cardDialogAvatar.src = kruAvatar;
      imgElement.alt = 'hero';
    } else if (selectedHero === 'porech') {
      cardDialogAvatar.src = porechAvatar;
      imgElement.alt = 'hero';
    } else if (selectedHero === 'woman') {
      cardDialogAvatar.src = womanAvatar;
      imgElement.alt = 'hero';
    }
    nameTitle.textContent = numberArrName;
    nameSubtitle.textContent = numberArrDescr;
  } else {
    null;
  }
};
const addCardTextTractir = (nameTitle, nameSubtitle, numberArrName, numberArrDescr) => {
  if (nameTitle) {
    nameTitle.textContent = numberArrName;
    nameSubtitle.textContent = numberArrDescr;
  } else {
    null;
  }
};
const addCardTextPolice = (nameTitle, nameSubtitle, numberArrName, numberArrDescr) => {
  if (nameTitle) {
    nameTitle.textContent = numberArrName;
    nameSubtitle.textContent = numberArrDescr;
  } else {
    null;
  }
};
const addCardTextNochlejka = (nameTitle, nameSubtitle, numberArrName, numberArrDescr, cardDialogAvatar) => {
  if (nameTitle) {
    if (selectedHero === 'kru') {
      cardDialogAvatar.src = kruAvatar;
      imgElement.alt = 'hero';
    } else if (selectedHero === 'porech') {
      cardDialogAvatar.src = porechAvatar;
      imgElement.alt = 'hero';
    } else if (selectedHero === 'woman') {
      cardDialogAvatar.src = womanAvatar;
      imgElement.alt = 'hero';
    }
    nameTitle.textContent = numberArrName;
    nameSubtitle.textContent = numberArrDescr;
  } else {
    null;
  }
};
fetch(url).then(response => response.json()).then(resp => {
  console.log(resp);
  const location = resp.location;
  const heroes = resp.heroes;
  addCardTextRadji(radjiTitle, radjiSubTitle, location[0].name, location[0].desc);
  addCardTextTractir(tractiriTitle, tractirSubTitle, location[1].name, location[1].desc);
  addCardTextPolice(policeTitle, policeSubTitle, location[2].name, location[2].desc);
  addCardTextAntikvar(antikvarTitle, antikvarSubTitle, location[3].name, location[3].desc, antikvarAvatar);
  addCardTextNochlejka(nochlejkaTitle, nochlejkaSubTitle, location[4].name, location[4].desc, nochlejkaAvatar);
}).catch(error => console.log('Error', error));
radjiItem.forEach(item => {
  item.addEventListener('click', () => {
    console.log(radjiItem);
    radjiBlock.style.display = 'flex';
  });
});

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./src/js/app.js");
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/js/cookies.js");
/******/ 	__webpack_require__("./src/js/main.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/preloader.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map