
document.addEventListener("DOMContentLoaded", function () {
  let reactions = document.querySelectorAll('.reaction');
  reactions.forEach(e => {
    e.onclick = function () {
      let icon = e.querySelector("i");
      reactions.forEach(el => {
        let i = el.querySelector("i");
        i.classList.remove("fa-solid");
        i.classList.remove(el.getAttribute("id").toString());
      });
      icon.classList.toggle(e.getAttribute("id").toString());
      icon.classList.toggle("fa-solid");
    }
  });
});
document.addEventListener("DOMContentLoaded", async function () {
  const choices = new Choices(document.querySelector('#categoryId'), {
    placeholder: false,
    itemSelectText: '',
    searchEnabled: false

  });
});
document.addEventListener("DOMContentLoaded", function () {
  const initPartnerSwiper = function () {
    if (window.innerWidth < 768) {
      partnerSwiper = new Swiper(".alnews-swiper", {
        slidesPerView: 2,
        spaceBetween: 16,

        freeMode: true,
        direction: 'horizontal',
        loop: true,

        pagination: {
          el: '.swiper-pagination',
        },
      });
    } else if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
      partnerSwiper = new Swiper(".swiper", {
        slidesPerView: 2,
        spaceBetween: 16,

        freeMode: true,
        direction: 'horizontal',
        loop: true,

        pagination: {
          el: '.swiper-pagination',
        },
      });
    } else {
      partnerSwiper = new Swiper(".swiper", {
        slidesPerView: 3,
        spaceBetween: 16,
        freeMode: true,
        direction: 'horizontal',
        loop: true,

        pagination: {
          el: '.swiper-pagination',
        },
        //autoplay: {
        //    delay: 3000,
        //},
      });
    }
  };
  initPartnerSwiper();




});

