const left = document.querySelector(".left")
const right = document.querySelector(".right")
const slider = document.querySelector(".slider")
const image = document.querySelectorAll(".image")

let length = 1
let imageLength = image.length

left.addEventListener('click', () => {
    if(length < imageLength){
        slider.style.transform = `translateX(-${length * 800}px)`
        length++
        console.log("Inside if" ,length);

    } else {
        length = 0;
        console.log(length);
    }

})