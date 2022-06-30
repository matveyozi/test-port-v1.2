const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close'),
    overlayClose = document.querySelector('.menu__overlay'),
    linkClick = document.querySelectorAll('.menu__link');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

overlayClose.addEventListener('click', () => {
    menu.classList.remove('active');
});





// skills__lvl-num
// skills__lvl-scale

const countres = document.querySelectorAll('.skills__lvl-num'),
      lines = document.querySelectorAll('.skills__lvl-scale span');

      countres.forEach( (item, i) => {
        lines[i].style.width = item.innerHTML;
      });


$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 800) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        };
    });


    $('a[href=#up]').click(function () {
        const $page = $('html, body');
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 400);
        return false;
    });

    
})