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
})