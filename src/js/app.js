const start_texts = [
    /*01*/{title: "Константин Станиславский",
      text: "Режиссер с нестандартным подходом к поиску тем. Интеллектуал с развитой интуицией. Широкий кругозор, любознательность и настойчивость помогают решать самые сложные задачи и выпутываться из всевозможных передряг. Не лишен актерских качеств."},
    /*02*/{title: "Владимир Гиляровский",
      text: 'Журналист, знакомый с различными сторонами человеческой жизни, включая самые неприглядные. Обширный круг знакомств в самых разных сферах, умение находить общий язык практически с любым человеком — от бродяги и преступника до аристократа, — а также доскональное знание московских трущоб и их обитателей не раз выручали его в сложных ситуациях.'},
    /*03*/{title: 'Княжна',
      text: 'Обитательница Хитровки, воровка. Утверждает, что она — потомок аристократического рода, но доказать это невозможно, хоть она образованна и даже говорит по-французски. Несмотря на суровую жизнь, отличается благородством. Находчива.'},
  ]
  
  function urlSegment(num) {return location.pathname.split('/')[num]}
  const curUrl = urlSegment(1)?.replace('.html', '')
  if (curUrl === 'nochlejka') Cookies.set('location', 0)
  
  
  //index
  function setStartEvents () {
    const persons = document.querySelectorAll('.main_hero-section img')
    console.log(persons)
    if (persons.length)
      for (let i = 0; i < persons.length; i++) {
        persons[i].onmouseover = function (e) {
          const title = document.querySelector('.hero_description .hero-title')
          const text = document.querySelector('.hero_description .hero-subtitle')
          title.innerHTML = start_texts[i].title
          text.innerHTML = start_texts[i].text
        }
      }
  }
  
  if (curUrl === '') setStartEvents()
  
  //map
  function initMap () {
    let maxLoc = Cookies.get('location')
    if (!maxLoc) maxLoc = 0
    const locations = document.querySelectorAll('.point-item a')
    for (let i = 0; i < locations.length; i++) {
      const loc = locations[i];
      if (i > maxLoc) {
        loc.removeAttribute('href')
      } else {
        loc.classList.add('active')
      }
    }
  }
  
  if (curUrl.includes('map')) initMap()
  
  //map link
  function setMapLink () {
    window.addEventListener('click', function (e) {
      const link = e.target.closest('.map_link')
      if (!link) return
      //link.removeAttribute('href')
      let num;
      switch (curUrl) {
        case 'kvartira': num = 1; break;
        case 'traktir': num = 2; break;
        case 'police': num = 3; break;
        case 'antikvar': num = 4; break;
        case 'nochlejka': num = 5; break;
      }
      let maxLoc = Cookies.get('location')
      if (!maxLoc) maxLoc = 0
      if (num > maxLoc) Cookies.set('location', num)
    })
  }
  setMapLink()
  