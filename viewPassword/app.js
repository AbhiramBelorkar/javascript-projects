
const password = document.getElementById('password')
const view = document.getElementById('togglePassword')

view.addEventListener('click', () => {

    if (password.type === 'password'){
        password.setAttribute('type', 'text')
    } else {
        password.setAttribute('type', 'password')
    }
})