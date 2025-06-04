const boxes = document.querySelectorAll('span')
// const body = document.querySelector('body')

// console.log(box)
// console.log(body)

boxes.forEach((box) => {
    box.addEventListener('click', function changeColor() {
        debugger
        console.log(box.id)
        const color = box.id
        console.log(color)
        document.body.style.backgroundColor = color
    })
})