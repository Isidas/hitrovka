import './preloader'
import './scripts'

import './index-page'
import './map-page'
import './map-links-listener'

if (location.pathname.replace('/', '') !== '' && !localStorage.getItem('selectedHero')) {
  location.replace(location.origin)
}

if (location.pathname.includes('nochlejka')) {
  Cookies.set('location', 0)
}
