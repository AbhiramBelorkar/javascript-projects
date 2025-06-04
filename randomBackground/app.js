const changeColorBtn = document.getElementById('changeColorBtn')
const colorCode = document.getElementById('colorCode')
const btn = document.getElementById('changeColorBtn')

const createHex = () => {
    let hex = '0123456789ABCDEF'
    let hash = '#'

    console.log(hash + hex)
    for (let i = 0; i < 6; i++) {
        hash = hash + hex[Math.floor(Math.random() * 16)]
    }

    console.log(hash)
    return hash
}

btn.addEventListener('click', () => {
    const color = createHex()
    document.body.style.backgroundColor = color
    colorCode.textContent = color
})
