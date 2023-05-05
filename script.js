let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
    },
});


let map;

DG.then(function () {
    map = DG.map('map', {
        center: [65.952040, 111.476797],
        zoom: 13
    });

    DG.marker([65.952040, 111.476797]).addTo(map).bindPopup('Шашлычный');
});