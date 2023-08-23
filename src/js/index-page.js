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
