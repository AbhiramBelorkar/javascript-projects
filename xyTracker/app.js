const xPos = document.getElementById('xPos')
const yPos = document.getElementById('yPos')

document.addEventListener('mousemove', (e) => {
    // console.log(e)

    xPos.textContent = e.clientX
    yPos.textContent = e.clientY

    const red = e.clientX % 256;
    const green = e.clientY % 256;
    const blue = 150;

    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
})