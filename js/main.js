var owl = $('.ul-craousel');

document.addEventListener("DOMContentLoaded", function () {
  owl.owlCarousel({
    items: 1,
    loop: true,
    smartSpeed: 1000,
    transitionStyle: "fade",
    animateOut: 'fadeOut',
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    onInitialized: startAutoplay
  });

  $('.pinned-article-info').on('click', function() {
    var index = $(this).index();
    owl.trigger('to.owl.carousel', index);
    owl.trigger('play.owl.autoplay', [3000]);
  });

  const collapsibleHeader = document.querySelectorAll('.ul-navigation-bar .dropdown');
  if(collapsibleHeader)
    {
        collapsibleHeader.forEach(element => {
      element.addEventListener('mouseenter', function () {
          this.querySelector(".arrow-r")?.classList.add("active");

          element.addEventListener('mouseleave', function () {
              this.querySelector(".arrow-r")?.classList.remove("active");
          });
      });

  });
    }

});

function startAutoplay() {
  owl.trigger('play.owl.autoplay', [3000]);
}
