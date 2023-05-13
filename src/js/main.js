
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

const radjiBlock= document.querySelector('.radji_dialog');
const radjiItem= document.querySelectorAll('.radji-item');


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
                <p class="remove_map">«Вернуться на карту»</p>
            </a>`
        } else {
            currentIndex = (currentIndex + 1) % texts.length;
        }
    }

    if(traktirDialog) {
        traktirBlock.addEventListener('click', changeText);
        traktirBlock.addEventListener('tap', changeText);
    } else {
        null
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
        antikvarDialog.textContent = texts[currentIndex];
    
        if (currentIndex === texts.length - 1) {
            antikvarDialog.removeEventListener('click', changeText);
            antikvarDialog.innerHTML = `${texts[currentIndex]} 
            <a href="./map.html" class="map_link">
                <p class="remove_map">«Вернуться на карту»</p>
            </a>`
        } else {
            currentIndex = (currentIndex + 1) % texts.length;
        }
    }

    if(antikvarDialog) {
        antikvarBlock.addEventListener('click', changeText);
        antikvarBlock.addEventListener('tap', changeText);
    } else {
        null
    }
}

changeDialogAntikvar()

const changeDialogNochlejka = () => {
    const nochlejkaDialog = document.querySelector('.nochlejka_dialog');
    const nochlejkaBlock = document.querySelector('.nochlejka_block');
    const nochlejkaVideoblock = document.querySelector('.card_videoblock');
    const texts = ["Странно, это место выглядит давно заброшенным… Кажется, мы шли по ложному следу. Придется начинать расследование сначала!",
            "Кто же убил Раджу? Все ответы вы найдете в фильме «Хитровка. Знак четырех». В кино уже с 18 мая.\n\nСмотреть трейлер"
        ];

    let currentIndex = 1;

    function changeText() {
        nochlejkaDialog.textContent = texts[currentIndex];
    
        if (currentIndex === texts.length - 1) {
            nochlejkaDialog.removeEventListener('click', changeText);
            nochlejkaDialog.innerHTML = `${texts[currentIndex]}`
        } else {
            currentIndex = (currentIndex + 1) % texts.length;
        }
    }

    if(nochlejkaDialog) {
        nochlejkaBlock.addEventListener('click', changeText);
        nochlejkaBlock.addEventListener('tap', changeText);
    } else {
        null
    }
}

changeDialogNochlejka()

function selectHero(heroId) {
    localStorage.setItem('selectedHero', heroId);
  }

  if(kru && porech && woman) {
    kru.addEventListener('click', function() {
        selectHero('kru');
      });
      porech.addEventListener('click', function() {
        selectHero('porech');
      });
      woman.addEventListener('click', function() {
        selectHero('woman');
      });
  }
// localStorage.clear()
const selectedHero = localStorage.getItem('selectedHero')

const kruAvatar = './img/kruEclips.webp'
const porechAvatar = './img/porech6.webp'
const womanAvatar = '../img/wonam.webp'

const addCardTextRadji = (nameTitle, nameSubtitle, numberArrName, numberArrDescr) => {
    if(nameTitle) {
        nameTitle.textContent = numberArrName
        nameSubtitle.textContent = numberArrDescr
    } else {
        null
    }
}
const addCardTextAntikvar = (nameTitle, nameSubtitle, numberArrName, numberArrDescr, cardDialogAvatar) => {
    if(nameTitle) {
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
        nameTitle.textContent = numberArrName
        nameSubtitle.textContent = numberArrDescr
    } else {
        null
    }
}
const addCardTextTractir = (nameTitle, nameSubtitle, numberArrName, numberArrDescr) => {
    if(nameTitle) {
        nameTitle.textContent = numberArrName
        nameSubtitle.textContent = numberArrDescr
    } else {
        null
    }
}
const addCardTextPolice= (nameTitle, nameSubtitle, numberArrName, numberArrDescr) => {
    if(nameTitle) {
        nameTitle.textContent = numberArrName
        nameSubtitle.textContent = numberArrDescr
    } else {
        null
    }
}
const addCardTextNochlejka= (nameTitle, nameSubtitle, numberArrName, numberArrDescr, cardDialogAvatar) => {
    if(nameTitle) {
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
        nameTitle.textContent = numberArrName
        nameSubtitle.textContent = numberArrDescr
    } else {
        null
    }
}







fetch(url)
  .then(response => response.json())
  .then(resp => {
    console.log(resp);
    const location = resp.location
    const heroes = resp.heroes


    addCardTextRadji(radjiTitle, radjiSubTitle, location[0].name, location[0].desc)
    addCardTextTractir(tractiriTitle, tractirSubTitle, location[1].name, location[1].desc)
    addCardTextPolice(policeTitle, policeSubTitle, location[2].name, location[2].desc)
    addCardTextAntikvar(antikvarTitle, antikvarSubTitle, location[3].name, location[3].desc, antikvarAvatar);
    addCardTextNochlejka(nochlejkaTitle, nochlejkaSubTitle, location[4].name, location[4].desc, nochlejkaAvatar)
   
    
  })
  .catch(error => console.log('Error', error))


  
radjiItem.forEach(item => {
    item.addEventListener('click', () => {
        console.log(radjiItem);
        radjiBlock.style.display = 'flex'
    })
})


