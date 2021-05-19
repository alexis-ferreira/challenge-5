'use strict';

let slider = ["./images/image-tanya.jpg", "./images/image-john.jpg"]
// console.log(slider);

let img = document.getElementById('imgSlider');
    console.log(img);

let btnPreview = document.getElementById('preview-img');
// console.log(btnPreview);
let btnNext = document.getElementById('next-img');
// console.log(btnNext);
let paragraph = document.getElementById('paragraphSlide');
// console.log(paragraph);
let authorSpan = document.getElementById('authorSlideSpan');
// console.log(authorSpan);
let authorSlide = document.getElementById('authorSlide');
console.log(authorSlide);


function changeSlide(){
    
    // console.log(imgSrc);
    img.getAttribute('src') == slider[0] ? img.setAttribute('src',slider[1]) : img.setAttribute('src',slider[0])
    // console.log(img.getAttribute('src'));
    
    img.getAttribute('src') == slider[0] ? paragraph.innerHTML="“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”" : paragraph.innerHTML="“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”";

    if (img.getAttribute('src') == slider[0]){
        authorSlide.innerHTML="UX Engineer",
        authorSpan.innerHTML="Tanya Sinclair",
        console.log(authorSpan);
    }
    else{
        authorSpan.innerHTML="John Tarkpor Junior",
        authorSlide.innerHTML="Front-end Developer"
    }
    
}

btnPreview.addEventListener('click',changeSlide);
btnNext.addEventListener('click',changeSlide);