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
  slidesPerView: 6,
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
})

//Input File
const fileInput = document.querySelector('#fileInput')

const fileChanged = e => {
  let fileName = e.target.files[0].name || 'Файл не выбран'
  document.querySelector('.input-file-text').innerHTML = fileName 
}

fileInput.addEventListener('change', fileChanged)

//hCaptcha

// hcaptcha.execute('captcha', { async: true })
//     .then(({ response, key }) => {
//         console.log(response, key);
//     })
//     .catch(err => {
//         console.error(err);
//     });

  
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

  let placemark = new ymaps.Placemark(coords, {}, {
		iconLayout: 'default#image',
		iconImageHref: 'https://image.flaticon.com/icons/png/512/64/64113.png',
		iconImageSize: [40, 40],
		iconImageOffset: [-19, -44]
	});

}

ymaps.ready(init)