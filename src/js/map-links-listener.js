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
