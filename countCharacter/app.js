const textInput = document.getElementById('textInput')
const charCount = document.getElementById('charCount')
charCount.innerHTML = 100

textInput.addEventListener('input', () => {
    // console.log(textInput.value.length);

    let maxLength = 100
    maxLength = maxLength - textInput.value.length 
    console.log(maxLength);

    charCount.innerHTML = maxLength

    
})