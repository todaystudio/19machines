// Characteristic block Swiper
const charSwiper = new Swiper('#characterSwiper', {
  effect: 'fade',
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
})

//Lightbox option
lightbox.option({
  disableScrolling: true,
})

//Video Player
const playVideoBtn = document.querySelector('#playVideoBtn')
const videoPlayer = document.querySelector('#videoPlayer')

playVideoBtn.addEventListener('click', () => {
  videoPlayer.play()
  playVideoBtn.style.display = 'none'
})

videoPlayer.addEventListener('pause', () => playVideoBtn.style.display = 'block')
videoPlayer.addEventListener('ended', () => playVideoBtn.style.display = 'block')

//Gallery Swiper Slider
const gallerySwiper = new Swiper('#gallery', {
  slidesPerView: 2,
  grid: {
    fill: 'row',
    rows: 3,
  },
  spaceBetween: 20,
  pagination: {
    el: ".gallery__pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.gallery__next',
    prevEl: '.gallery__prev',
  },
  breakpoints: {
    585: {
      slidesPerView: 3,
      grid: {
        fill: 'row',
        rows: 3,
      },
    },
    834: {
      slidesPerView: 4,
      grid: {
        fill: 'row',
        rows: 3,
      },
    },
    1200: {
      slidesPerView: 6,
      grid: {
        fill: 'row',
        rows: 3,
      },
    }
  }
})

//Input File
const fileInput = document.querySelector('#fileInput')

const fileChanged = e => {
  let fileName = e.target.files[0].name || 'Файл не выбран'
  document.querySelector('.input-file-text').innerHTML = fileName
}

fileInput.addEventListener('change', fileChanged)

//hCaptcha

// document.addEventListener('DOMContentLoaded', () => {
//   hcaptcha.render('captcha', {
//     sitekey: '28f03946-47c1-4434-a21a-8473808de369',
//     theme: 'dark',
//   });


// })

// Yandex Map 

const coords = [56.651151068042545, 47.86287599999997]

function init() {
  let map = new ymaps.Map('yamap', {
    center: coords,
    zoom: 17
  })

  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил

  let MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
    '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
  )

  let placemark = new ymaps.Placemark(coords, {
    balloonContent: 'г. Йошкар-Ола, ул. Анциферова, д. 4В, офис 1',
    iconContent: 12,
  }, {
    iconLayout: 'default#image',
    iconImageHref: '../img/placemark.svg',
    iconImageSize: [40, 40],
    iconContentLayout: MyIconContentLayout,
    iconContentOffset: [-15, -15],
  });

  map.geoObjects.add(placemark)

}

ymaps.ready(init)

//Load more

const grid = document.querySelector('.variants__grid')
const items = document.querySelectorAll('.variants__item')
const viewWidth = document.documentElement.clientWidth
const loadMore = document.querySelector('#loadMore')

const loadMoreFactory = state => {
  items.forEach((item, idx) => {
    if (idx >= 4) item.style.display = state
  })
  if (state === 'block') loadMore.style.display = 'none'
}

if (viewWidth < 530) loadMoreFactory('none')

const loadMoreItems = () => loadMoreFactory('block')

loadMore.addEventListener('click', loadMoreItems)


// Overlay & Modal

const overlay = document.querySelector('.overlay')
const modal = document.querySelector('.modal')
const cross = document.querySelector('.modal__cross')
const callBackBtn = document.querySelectorAll('.call-me')

const toggleModal = (close) => {
  if (close === 'open') {
    overlay.classList.add('overlay__show')
    modal.classList.add('modal__show')
    overlay.classList.remove('overlay__close')
    modal.classList.remove('modal__close')
  }

  if (close === 'close') {
    overlay.classList.remove('overlay__show')
    modal.classList.remove('modal__show')
    overlay.classList.add('overlay__close')
    modal.classList.add('modal__close')
  }

}

callBackBtn.forEach(i => i.addEventListener('click', () => toggleModal('open')))
cross.addEventListener('click', () => {
  toggleModal('close')
})