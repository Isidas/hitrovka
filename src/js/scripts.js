
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
