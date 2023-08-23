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
