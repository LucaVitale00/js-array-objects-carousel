const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morales',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const mainContainerEl = document.querySelector(".col-10");
let position = 0;
let interval;
let child = position + 1;

const mainImageEl = document.createElement("img");
const thumbContainer = document.createElement("div");
const btnPrev = document.createElement("button");
const btnNext = document.createElement("button");
const myContainer = document.createElement("div");
const title = document.createElement("h4");
const text = document.createElement("p");
const btnCarousel = document.querySelector(".carousel-btn");
const invert = document.querySelector(".invert");






btnPrev.classList.add("btn-light", "rounded-5", "btn-prev");
btnNext.classList.add("btn-light", "rounded-5", "btn-next");
btnPrev.innerHTML = "&#8963;"
btnNext.innerHTML = "&#8964;"
mainImageEl.src = images[position].image;
title.textContent = images[position].title;
text.textContent = images[position].text;

btnCarousel.addEventListener("click", () => {
    btnCarousel.classList.toggle("active")
    if (btnCarousel.classList.contains("active")) {

        interval = setInterval(function () {

            changeImage(true);

        }, 2000);

    } else {

        clearInterval(interval);
    }
})

invert.addEventListener("click", () => {
    invert.classList.toggle("active")
    if (invert.classList.contains("active")) {

        interval = setInterval(function () {

            changeImage(false);

        }, 2000);

    } else {

        clearInterval(interval);
    }
})



function changeImage(isIncrementa) {

    if (isIncrementa) {
        position++;
        if (position >= images.length) {
            position = 0;
        }
    } else {
        position--;
        if (position < 0) {
            position = images.length;
        }
    }
    mainImageEl.src = images[position].image;
    title.textContent = images[position].title;
    text.textContent = images[position].text;
    imgActive();

}
imageFillThumb(thumbContainer);
title.classList.add("title")
text.classList.add("title")
myContainer.classList.add("d-flex", "my-container");
thumbContainer.classList.add("thumb-container");
mainImageEl.classList.add("main-img");
myContainer.append(title, text)
thumbContainer.append(btnPrev, btnNext);
mainContainerEl.append(mainImageEl, myContainer, thumbContainer)

imgActive();
btnPrev.addEventListener("click", () => {
    changeImage(false);


})
btnNext.addEventListener("click", () => {
    changeImage(true);

});

function imageFillThumb(thumbContainer) {
    for (let object in images) {
        const thumbImage = document.createElement("img");
        thumbImage.src = images[object].image;
        thumbImage.classList.add("w-100", "img-thumb")
        thumbContainer.append(thumbImage)
    }
}

function intervalStop() {
    clearInterval(interval)
}


function imgActive() {
    const oldActive = document.querySelectorAll(".thumb-container > img");
    oldActive.forEach(element => {
        element.classList.remove("active");
    });
    const active = document.querySelector(`.thumb-container :nth-child(${position + 1})`);
    active.classList.add("active");
}