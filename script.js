'use strict';

let slider = ["./images/image-tanya.jpg", "./images/image-john.jpg"]
// console.log(slider);

let img = document.getElementById('imgSlider');
    console.log(img);

let btnPreview = document.getElementById('preview-img');
// console.log(btnPreview);
let btnNext = document.getElementById('next-img');
// console.log(btnNext);


function changeSlide(){
    
    // console.log(imgSrc);
    img.getAttribute('src') == slider[0] ? img.setAttribute('src',slider[1]) : img.setAttribute('src',slider[0])
    console.log(img.getAttribute('src'));
    
    
}

btnPreview.addEventListener('click',changeSlide);
btnNext.addEventListener('click',changeSlide);