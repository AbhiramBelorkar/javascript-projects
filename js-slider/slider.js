const left = document.querySelector(".left")
const right = document.querySelector(".right")
const slider = document.querySelector(".slider")
const images = document.querySelectorAll(".image")
const bottom = document.querySelector('.bottom')

let sliderLength = 1
const imageNo = images.length
// console.log(imageNo);

right.addEventListener('click', () => {
    if (sliderLength < imageNo) {
        slider.style.transform = `translateX(-${sliderLength * 800}px)`
        console.log(sliderLength);
        sliderLength++
    } else {
        slider.style.transform = `translateX(-0px)`
        sliderLength = 1;
    }
    changeColor()

})

left.addEventListener('click', () => {
    if (sliderLength > 1) {
        slider.style.transform = `translateX(-${(sliderLength - 2) * 800}px)`;
        sliderLength--
    } else {
        slider.style.transform = `translateX(-${(imageNo - 1) * 800}px)`
        sliderLength = imageNo
    }
    changeColor()

})

for (let i = 0; i < imageNo; i++) {
    const div = document.createElement('div')
    div.className = "button"
    // console.log(div);
    bottom.appendChild(div)
}

const buttons = document.querySelectorAll(".button")
buttons[0].style.backgroundColor = "white"

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        removeBg()
        slider.style.transform = `translateX(-${(index) * 800}px)`
        console.log(index);
        button.style.backgroundColor = 'white'
    })
})

const removeBg = () => {
    buttons.forEach((button) => {
        button.style.backgroundColor = 'transparent'
    })
}

const changeColor = () => {
    removeBg()
    buttons[sliderLength - 1].style.backgroundColor = "white";
}